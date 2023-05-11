import { withCtx, createVNode, createTextVNode, toDisplayString, mergeProps, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { VAvatar } from "vuetify/lib/components/VAvatar/index.mjs";
import { VCard } from "vuetify/lib/components/VCard/index.mjs";
import { VContainer, VRow, VCol } from "vuetify/lib/components/VGrid/index.mjs";
import { VHover } from "vuetify/lib/components/VHover/index.mjs";
import { VImg } from "vuetify/lib/components/VImg/index.mjs";
import { VListItem, VListItemTitle, VListItemSubtitle } from "vuetify/lib/components/VList/index.mjs";
import { VPagination } from "vuetify/lib/components/VPagination/index.mjs";
const _sfc_main = {
  __name: "category_news",
  __ssrInlineRender: true,
  props: {
    news: Object,
    title: String
  },
  setup(__props) {
    const paginate = (e) => {
      window.location.href = "?page=" + e;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (__props.news["data"].length == 0) {
                    _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCard, {
                            flat: "",
                            color: "transparent",
                            class: "py-16"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="font-rajdhani text-h1 font-weight-bold"${_scopeId4}> माफ गर्नुहोस्! <span class="text-primary"${_scopeId4}>&quot; ${ssrInterpolate(__props.title || _ctx.tag)} &quot;</span> नामको कुनै पोस्ट फेला परेन </div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "font-rajdhani text-h1 font-weight-bold" }, [
                                    createTextVNode(" माफ गर्नुहोस्! "),
                                    createVNode("span", { class: "text-primary" }, '" ' + toDisplayString(__props.title || _ctx.tag) + ' "', 1),
                                    createTextVNode(" नामको कुनै पोस्ट फेला परेन ")
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCard, {
                              flat: "",
                              color: "transparent",
                              class: "py-16"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "font-rajdhani text-h1 font-weight-bold" }, [
                                  createTextVNode(" माफ गर्नुहोस्! "),
                                  createVNode("span", { class: "text-primary" }, '" ' + toDisplayString(__props.title || _ctx.tag) + ' "', 1),
                                  createTextVNode(" नामको कुनै पोस्ट फेला परेन ")
                                ])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!--[-->`);
                    _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="font-rajdhani font-weight-bold text-h3"${_scopeId3}>${ssrInterpolate(__props.title)}</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "font-rajdhani font-weight-bold text-h3" }, toDisplayString(__props.title), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VRow, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(__props.news["data"], (item, index) => {
                                  _push5(ssrRenderComponent(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VHover, null, {
                                          default: withCtx(({ isHovering, props }, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(VListItem, mergeProps({
                                                href: "/news/" + item["id"]
                                              }, props, { class: "py-0 pl-0 mb-3" }), {
                                                prepend: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(VAvatar, {
                                                      rounded: "lg",
                                                      size: "auto"
                                                    }, {
                                                      default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(ssrRenderComponent(VImg, {
                                                            cover: "",
                                                            width: "200",
                                                            height: "150",
                                                            class: isHovering ? "zoom" : "",
                                                            src: item["image"],
                                                            alt: item.media[0].file_name
                                                          }, null, _parent9, _scopeId8));
                                                        } else {
                                                          return [
                                                            createVNode(VImg, {
                                                              cover: "",
                                                              width: "200",
                                                              height: "150",
                                                              class: isHovering ? "zoom" : "",
                                                              src: item["image"],
                                                              alt: item.media[0].file_name
                                                            }, null, 8, ["class", "src", "alt"])
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  } else {
                                                    return [
                                                      createVNode(VAvatar, {
                                                        rounded: "lg",
                                                        size: "auto"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VImg, {
                                                            cover: "",
                                                            width: "200",
                                                            height: "150",
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
                                                default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(VListItemTitle, {
                                                      class: "text-h5 text-wrap line-clamp-3 font-weight-bold mb-3",
                                                      style: { "line-height": "2rem", "white-space": "wrap" }
                                                    }, {
                                                      default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(`${ssrInterpolate(item["title"])}`);
                                                        } else {
                                                          return [
                                                            createTextVNode(toDisplayString(item["title"]), 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                    _push8(ssrRenderComponent(VListItemSubtitle, {
                                                      class: "line-clamp-3",
                                                      style: { "line-height": "1.2rem" }
                                                    }, null, _parent8, _scopeId7));
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
                                                      }, 1024),
                                                      createVNode(VListItemSubtitle, {
                                                        class: "line-clamp-3",
                                                        innerHTML: item["description"],
                                                        style: { "line-height": "1.2rem" }
                                                      }, null, 8, ["innerHTML"])
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
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
                                                          width: "200",
                                                          height: "150",
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
                                                    }, 1024),
                                                    createVNode(VListItemSubtitle, {
                                                      class: "line-clamp-3",
                                                      innerHTML: item["description"],
                                                      style: { "line-height": "1.2rem" }
                                                    }, null, 8, ["innerHTML"])
                                                  ]),
                                                  _: 2
                                                }, 1040, ["href"])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
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
                                                        width: "200",
                                                        height: "150",
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
                                                  }, 1024),
                                                  createVNode(VListItemSubtitle, {
                                                    class: "line-clamp-3",
                                                    innerHTML: item["description"],
                                                    style: { "line-height": "1.2rem" }
                                                  }, null, 8, ["innerHTML"])
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
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.news["data"], (item, index) => {
                                    return openBlock(), createBlock(VCol, {
                                      cols: "12",
                                      md: "6"
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
                                                      width: "200",
                                                      height: "150",
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
                                                }, 1024),
                                                createVNode(VListItemSubtitle, {
                                                  class: "line-clamp-3",
                                                  innerHTML: item["description"],
                                                  style: { "line-height": "1.2rem" }
                                                }, null, 8, ["innerHTML"])
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
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.news["data"], (item, index) => {
                                  return openBlock(), createBlock(VCol, {
                                    cols: "12",
                                    md: "6"
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
                                                    width: "200",
                                                    height: "150",
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
                                              }, 1024),
                                              createVNode(VListItemSubtitle, {
                                                class: "line-clamp-3",
                                                innerHTML: item["description"],
                                                style: { "line-height": "1.2rem" }
                                              }, null, 8, ["innerHTML"])
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
                    }, _parent3, _scopeId2));
                    _push3(`<!--]-->`);
                  }
                  if (__props.news["data"].length !== 0) {
                    _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VPagination, {
                            rounded: "circle",
                            variant: "flat",
                            "active-color": "primary",
                            modelValue: __props.news["current_page"],
                            "onUpdate:modelValue": [($event) => __props.news["current_page"] = $event, paginate],
                            length: __props.news["last_page"],
                            "total-visible": 7
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VPagination, {
                              rounded: "circle",
                              variant: "flat",
                              "active-color": "primary",
                              modelValue: __props.news["current_page"],
                              "onUpdate:modelValue": [($event) => __props.news["current_page"] = $event, paginate],
                              length: __props.news["last_page"],
                              "total-visible": 7
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "length"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    __props.news["data"].length == 0 ? (openBlock(), createBlock(VCol, {
                      key: 0,
                      cols: "12"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          flat: "",
                          color: "transparent",
                          class: "py-16"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "font-rajdhani text-h1 font-weight-bold" }, [
                              createTextVNode(" माफ गर्नुहोस्! "),
                              createVNode("span", { class: "text-primary" }, '" ' + toDisplayString(__props.title || _ctx.tag) + ' "', 1),
                              createTextVNode(" नामको कुनै पोस्ट फेला परेन ")
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createVNode(VCol, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "font-rajdhani font-weight-bold text-h3" }, toDisplayString(__props.title), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.news["data"], (item, index) => {
                                return openBlock(), createBlock(VCol, {
                                  cols: "12",
                                  md: "6"
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
                                                  width: "200",
                                                  height: "150",
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
                                            }, 1024),
                                            createVNode(VListItemSubtitle, {
                                              class: "line-clamp-3",
                                              innerHTML: item["description"],
                                              style: { "line-height": "1.2rem" }
                                            }, null, 8, ["innerHTML"])
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
                        ]),
                        _: 1
                      })
                    ], 64)),
                    __props.news["data"].length !== 0 ? (openBlock(), createBlock(VCol, {
                      key: 2,
                      cols: "12"
                    }, {
                      default: withCtx(() => [
                        createVNode(VPagination, {
                          rounded: "circle",
                          variant: "flat",
                          "active-color": "primary",
                          modelValue: __props.news["current_page"],
                          "onUpdate:modelValue": [($event) => __props.news["current_page"] = $event, paginate],
                          length: __props.news["last_page"],
                          "total-visible": 7
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "length"])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, null, {
                default: withCtx(() => [
                  __props.news["data"].length == 0 ? (openBlock(), createBlock(VCol, {
                    key: 0,
                    cols: "12"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCard, {
                        flat: "",
                        color: "transparent",
                        class: "py-16"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "font-rajdhani text-h1 font-weight-bold" }, [
                            createTextVNode(" माफ गर्नुहोस्! "),
                            createVNode("span", { class: "text-primary" }, '" ' + toDisplayString(__props.title || _ctx.tag) + ' "', 1),
                            createTextVNode(" नामको कुनै पोस्ट फेला परेन ")
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "font-rajdhani font-weight-bold text-h3" }, toDisplayString(__props.title), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.news["data"], (item, index) => {
                              return openBlock(), createBlock(VCol, {
                                cols: "12",
                                md: "6"
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
                                                width: "200",
                                                height: "150",
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
                                          }, 1024),
                                          createVNode(VListItemSubtitle, {
                                            class: "line-clamp-3",
                                            innerHTML: item["description"],
                                            style: { "line-height": "1.2rem" }
                                          }, null, 8, ["innerHTML"])
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
                      ]),
                      _: 1
                    })
                  ], 64)),
                  __props.news["data"].length !== 0 ? (openBlock(), createBlock(VCol, {
                    key: 2,
                    cols: "12"
                  }, {
                    default: withCtx(() => [
                      createVNode(VPagination, {
                        rounded: "circle",
                        variant: "flat",
                        "active-color": "primary",
                        modelValue: __props.news["current_page"],
                        "onUpdate:modelValue": [($event) => __props.news["current_page"] = $event, paginate],
                        length: __props.news["last_page"],
                        "total-visible": 7
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "length"])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/category_news.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
