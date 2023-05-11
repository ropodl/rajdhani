import { defineAsyncComponent, withCtx, unref, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { VAppBar } from "vuetify/lib/components/VAppBar/index.mjs";
import { VBtn } from "vuetify/lib/components/VBtn/index.mjs";
import { VContainer, VRow, VCol } from "vuetify/lib/components/VGrid/index.mjs";
import { VImg } from "vuetify/lib/components/VImg/index.mjs";
const _sfc_main = {
  __name: "bottombar",
  __ssrInlineRender: true,
  props: {
    info: Object,
    socials: Object
  },
  setup(__props) {
    const facebook = defineAsyncComponent(
      () => import("./chunk-0f28de98.js")
    );
    const instagram = defineAsyncComponent(
      () => import("./chunk-baa7e9e3.js")
    );
    const twitter = defineAsyncComponent(
      () => import("./chunk-bd530216.js")
    );
    const linkedin = defineAsyncComponent(
      () => import("./chunk-7d35b0f7.js")
    );
    const youtube = defineAsyncComponent(
      () => import("./chunk-3d24beb5.js")
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="bg-grey-darken-4">`);
      _push(ssrRenderComponent(VContainer, { class: "py-8" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "3"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VImg, {
                          class: "w-100 mb-3",
                          height: "50",
                          src: "/frontend/img/logo.png"
                        }, null, _parent4, _scopeId3));
                        _push4(`<div class="mb-3"${_scopeId3}>${__props.info["description"]}</div><ul class="d-flex justify-space-between list-style-none ml-auto mb-0"${_scopeId3}>`);
                        if (__props.socials["facebook_link"]) {
                          _push4(`<li${_scopeId3}>`);
                          _push4(ssrRenderComponent(VBtn, {
                            variant: "tonal",
                            color: "white",
                            icon: unref(facebook),
                            href: __props.socials["facebook_link"],
                            target: "_blank"
                          }, null, _parent4, _scopeId3));
                          _push4(`</li>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        if (__props.socials["instagram_link"]) {
                          _push4(`<li${_scopeId3}>`);
                          _push4(ssrRenderComponent(VBtn, {
                            variant: "tonal",
                            color: "white",
                            icon: unref(instagram),
                            href: __props.socials["instagram_link"],
                            target: "_blank"
                          }, null, _parent4, _scopeId3));
                          _push4(`</li>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        if (__props.socials["youtube_link"]) {
                          _push4(`<li${_scopeId3}>`);
                          _push4(ssrRenderComponent(VBtn, {
                            variant: "tonal",
                            color: "white",
                            icon: unref(youtube),
                            href: __props.socials["youtube_link"],
                            target: "_blank"
                          }, null, _parent4, _scopeId3));
                          _push4(`</li>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        if (__props.socials["twitter_link"]) {
                          _push4(`<li${_scopeId3}>`);
                          _push4(ssrRenderComponent(VBtn, {
                            variant: "tonal",
                            color: "white",
                            icon: unref(twitter),
                            href: __props.socials["twitter_link"],
                            target: "_blank"
                          }, null, _parent4, _scopeId3));
                          _push4(`</li>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        if (__props.socials["linkedin_link"]) {
                          _push4(`<li${_scopeId3}>`);
                          _push4(ssrRenderComponent(VBtn, {
                            variant: "tonal",
                            color: "white",
                            icon: unref(linkedin),
                            href: __props.socials["linkedin_link"],
                            target: "_blank"
                          }, null, _parent4, _scopeId3));
                          _push4(`</li>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</ul>`);
                      } else {
                        return [
                          createVNode(VImg, {
                            class: "w-100 mb-3",
                            height: "50",
                            src: "/frontend/img/logo.png"
                          }),
                          createVNode("div", {
                            class: "mb-3",
                            innerHTML: __props.info["description"]
                          }, null, 8, ["innerHTML"]),
                          createVNode("ul", { class: "d-flex justify-space-between list-style-none ml-auto mb-0" }, [
                            __props.socials["facebook_link"] ? (openBlock(), createBlock("li", { key: 0 }, [
                              createVNode(VBtn, {
                                variant: "tonal",
                                color: "white",
                                icon: unref(facebook),
                                href: __props.socials["facebook_link"],
                                target: "_blank"
                              }, null, 8, ["icon", "href"])
                            ])) : createCommentVNode("", true),
                            __props.socials["instagram_link"] ? (openBlock(), createBlock("li", { key: 1 }, [
                              createVNode(VBtn, {
                                variant: "tonal",
                                color: "white",
                                icon: unref(instagram),
                                href: __props.socials["instagram_link"],
                                target: "_blank"
                              }, null, 8, ["icon", "href"])
                            ])) : createCommentVNode("", true),
                            __props.socials["youtube_link"] ? (openBlock(), createBlock("li", { key: 2 }, [
                              createVNode(VBtn, {
                                variant: "tonal",
                                color: "white",
                                icon: unref(youtube),
                                href: __props.socials["youtube_link"],
                                target: "_blank"
                              }, null, 8, ["icon", "href"])
                            ])) : createCommentVNode("", true),
                            __props.socials["twitter_link"] ? (openBlock(), createBlock("li", { key: 3 }, [
                              createVNode(VBtn, {
                                variant: "tonal",
                                color: "white",
                                icon: unref(twitter),
                                href: __props.socials["twitter_link"],
                                target: "_blank"
                              }, null, 8, ["icon", "href"])
                            ])) : createCommentVNode("", true),
                            __props.socials["linkedin_link"] ? (openBlock(), createBlock("li", { key: 4 }, [
                              createVNode(VBtn, {
                                variant: "tonal",
                                color: "white",
                                icon: unref(linkedin),
                                href: __props.socials["linkedin_link"],
                                target: "_blank"
                              }, null, 8, ["icon", "href"])
                            ])) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="font-rajdhani text-h6 font-weight-bold"${_scopeId3}> कार्यकारी प्रवन्धक </div><div${_scopeId3}>${ssrInterpolate(__props.info["executive_manager"])}</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "font-rajdhani text-h6 font-weight-bold" }, " कार्यकारी प्रवन्धक "),
                          createVNode("div", null, toDisplayString(__props.info["executive_manager"]), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="font-rajdhani text-h6 font-weight-bold"${_scopeId3}> सम्पादक : </div><div${_scopeId3}>${ssrInterpolate(__props.info["editor"])}</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "font-rajdhani text-h6 font-weight-bold" }, " सम्पादक : "),
                          createVNode("div", null, toDisplayString(__props.info["editor"]), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="font-rajdhani text-h6 font-weight-bold"${_scopeId3}> सूचना विभाग दर्ता नं : </div><div${_scopeId3}>${ssrInterpolate(__props.info["registration_no"])}</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "font-rajdhani text-h6 font-weight-bold" }, " सूचना विभाग दर्ता नं : "),
                          createVNode("div", null, toDisplayString(__props.info["registration_no"]), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="font-rajdhani text-h6 font-weight-bold"${_scopeId3}> सम्पर्क </div><ul class="list-style-none"${_scopeId3}><li${_scopeId3}>${ssrInterpolate(__props.info["address"])}</li><li${_scopeId3}>${ssrInterpolate(__props.info["phone1"])} `);
                        if (__props.info["phone2"]) {
                          _push4(`<span${_scopeId3}> ,${ssrInterpolate(__props.info["phone2"])}</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</li><li${_scopeId3}>${ssrInterpolate(__props.info["email"])}</li></ul>`);
                      } else {
                        return [
                          createVNode("div", { class: "font-rajdhani text-h6 font-weight-bold" }, " सम्पर्क "),
                          createVNode("ul", { class: "list-style-none" }, [
                            createVNode("li", null, toDisplayString(__props.info["address"]), 1),
                            createVNode("li", null, [
                              createTextVNode(toDisplayString(__props.info["phone1"]) + " ", 1),
                              __props.info["phone2"] ? (openBlock(), createBlock("span", { key: 0 }, " ," + toDisplayString(__props.info["phone2"]), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("li", null, toDisplayString(__props.info["email"]), 1)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      md: "3"
                    }, {
                      default: withCtx(() => [
                        createVNode(VImg, {
                          class: "w-100 mb-3",
                          height: "50",
                          src: "/frontend/img/logo.png"
                        }),
                        createVNode("div", {
                          class: "mb-3",
                          innerHTML: __props.info["description"]
                        }, null, 8, ["innerHTML"]),
                        createVNode("ul", { class: "d-flex justify-space-between list-style-none ml-auto mb-0" }, [
                          __props.socials["facebook_link"] ? (openBlock(), createBlock("li", { key: 0 }, [
                            createVNode(VBtn, {
                              variant: "tonal",
                              color: "white",
                              icon: unref(facebook),
                              href: __props.socials["facebook_link"],
                              target: "_blank"
                            }, null, 8, ["icon", "href"])
                          ])) : createCommentVNode("", true),
                          __props.socials["instagram_link"] ? (openBlock(), createBlock("li", { key: 1 }, [
                            createVNode(VBtn, {
                              variant: "tonal",
                              color: "white",
                              icon: unref(instagram),
                              href: __props.socials["instagram_link"],
                              target: "_blank"
                            }, null, 8, ["icon", "href"])
                          ])) : createCommentVNode("", true),
                          __props.socials["youtube_link"] ? (openBlock(), createBlock("li", { key: 2 }, [
                            createVNode(VBtn, {
                              variant: "tonal",
                              color: "white",
                              icon: unref(youtube),
                              href: __props.socials["youtube_link"],
                              target: "_blank"
                            }, null, 8, ["icon", "href"])
                          ])) : createCommentVNode("", true),
                          __props.socials["twitter_link"] ? (openBlock(), createBlock("li", { key: 3 }, [
                            createVNode(VBtn, {
                              variant: "tonal",
                              color: "white",
                              icon: unref(twitter),
                              href: __props.socials["twitter_link"],
                              target: "_blank"
                            }, null, 8, ["icon", "href"])
                          ])) : createCommentVNode("", true),
                          __props.socials["linkedin_link"] ? (openBlock(), createBlock("li", { key: 4 }, [
                            createVNode(VBtn, {
                              variant: "tonal",
                              color: "white",
                              icon: unref(linkedin),
                              href: __props.socials["linkedin_link"],
                              target: "_blank"
                            }, null, 8, ["icon", "href"])
                          ])) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "font-rajdhani text-h6 font-weight-bold" }, " कार्यकारी प्रवन्धक "),
                        createVNode("div", null, toDisplayString(__props.info["executive_manager"]), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "font-rajdhani text-h6 font-weight-bold" }, " सम्पादक : "),
                        createVNode("div", null, toDisplayString(__props.info["editor"]), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "font-rajdhani text-h6 font-weight-bold" }, " सूचना विभाग दर्ता नं : "),
                        createVNode("div", null, toDisplayString(__props.info["registration_no"]), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "font-rajdhani text-h6 font-weight-bold" }, " सम्पर्क "),
                        createVNode("ul", { class: "list-style-none" }, [
                          createVNode("li", null, toDisplayString(__props.info["address"]), 1),
                          createVNode("li", null, [
                            createTextVNode(toDisplayString(__props.info["phone1"]) + " ", 1),
                            __props.info["phone2"] ? (openBlock(), createBlock("span", { key: 0 }, " ," + toDisplayString(__props.info["phone2"]), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("li", null, toDisplayString(__props.info["email"]), 1)
                        ])
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
                    md: "3"
                  }, {
                    default: withCtx(() => [
                      createVNode(VImg, {
                        class: "w-100 mb-3",
                        height: "50",
                        src: "/frontend/img/logo.png"
                      }),
                      createVNode("div", {
                        class: "mb-3",
                        innerHTML: __props.info["description"]
                      }, null, 8, ["innerHTML"]),
                      createVNode("ul", { class: "d-flex justify-space-between list-style-none ml-auto mb-0" }, [
                        __props.socials["facebook_link"] ? (openBlock(), createBlock("li", { key: 0 }, [
                          createVNode(VBtn, {
                            variant: "tonal",
                            color: "white",
                            icon: unref(facebook),
                            href: __props.socials["facebook_link"],
                            target: "_blank"
                          }, null, 8, ["icon", "href"])
                        ])) : createCommentVNode("", true),
                        __props.socials["instagram_link"] ? (openBlock(), createBlock("li", { key: 1 }, [
                          createVNode(VBtn, {
                            variant: "tonal",
                            color: "white",
                            icon: unref(instagram),
                            href: __props.socials["instagram_link"],
                            target: "_blank"
                          }, null, 8, ["icon", "href"])
                        ])) : createCommentVNode("", true),
                        __props.socials["youtube_link"] ? (openBlock(), createBlock("li", { key: 2 }, [
                          createVNode(VBtn, {
                            variant: "tonal",
                            color: "white",
                            icon: unref(youtube),
                            href: __props.socials["youtube_link"],
                            target: "_blank"
                          }, null, 8, ["icon", "href"])
                        ])) : createCommentVNode("", true),
                        __props.socials["twitter_link"] ? (openBlock(), createBlock("li", { key: 3 }, [
                          createVNode(VBtn, {
                            variant: "tonal",
                            color: "white",
                            icon: unref(twitter),
                            href: __props.socials["twitter_link"],
                            target: "_blank"
                          }, null, 8, ["icon", "href"])
                        ])) : createCommentVNode("", true),
                        __props.socials["linkedin_link"] ? (openBlock(), createBlock("li", { key: 4 }, [
                          createVNode(VBtn, {
                            variant: "tonal",
                            color: "white",
                            icon: unref(linkedin),
                            href: __props.socials["linkedin_link"],
                            target: "_blank"
                          }, null, 8, ["icon", "href"])
                        ])) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "2"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "font-rajdhani text-h6 font-weight-bold" }, " कार्यकारी प्रवन्धक "),
                      createVNode("div", null, toDisplayString(__props.info["executive_manager"]), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "2"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "font-rajdhani text-h6 font-weight-bold" }, " सम्पादक : "),
                      createVNode("div", null, toDisplayString(__props.info["editor"]), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "2"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "font-rajdhani text-h6 font-weight-bold" }, " सूचना विभाग दर्ता नं : "),
                      createVNode("div", null, toDisplayString(__props.info["registration_no"]), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "2"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "font-rajdhani text-h6 font-weight-bold" }, " सम्पर्क "),
                      createVNode("ul", { class: "list-style-none" }, [
                        createVNode("li", null, toDisplayString(__props.info["address"]), 1),
                        createVNode("li", null, [
                          createTextVNode(toDisplayString(__props.info["phone1"]) + " ", 1),
                          __props.info["phone2"] ? (openBlock(), createBlock("span", { key: 0 }, " ," + toDisplayString(__props.info["phone2"]), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("li", null, toDisplayString(__props.info["email"]), 1)
                      ])
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
      _push(ssrRenderComponent(VAppBar, {
        flat: "",
        class: "bg-grey-darken-4 position-static",
        style: { "z-index": "1 !important" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, { justify: "center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          class: "text-center"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Copyright © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} राजधानी प्रेस `);
                            } else {
                              return [
                                createTextVNode(" Copyright © " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " राजधानी प्रेस ", 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Copyright © " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " राजधानी प्रेस ", 1)
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
                    createVNode(VRow, { justify: "center" }, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          class: "text-center"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Copyright © " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " राजधानी प्रेस ", 1)
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
              createVNode(VContainer, null, {
                default: withCtx(() => [
                  createVNode(VRow, { justify: "center" }, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        class: "text-center"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Copyright © " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " राजधानी प्रेस ", 1)
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
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/layout/bottombar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
