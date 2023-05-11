import { ref, mergeProps, withCtx, unref, isRef, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { VCard } from "vuetify/lib/components/VCard/index.mjs";
import { VDivider } from "vuetify/lib/components/VDivider/index.mjs";
import { VList, VListItem, VListItemTitle } from "vuetify/lib/components/VList/index.mjs";
import { VTabs, VTab } from "vuetify/lib/components/VTabs/index.mjs";
import { VWindow, VWindowItem } from "vuetify/lib/components/VWindow/index.mjs";
const _sfc_main = {
  __name: "tabnews",
  __ssrInlineRender: true,
  props: {
    latest: Object,
    trending: Object
  },
  setup(__props) {
    let tab = ref("1");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, mergeProps({
        border: "",
        flat: "",
        class: "rounded-t-0"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTabs, {
              grow: "",
              color: "primary",
              modelValue: unref(tab),
              "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : tab = $event,
              "show-arrows": false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTab, {
                    class: "font-rajdhani text-subtitle-1 font-weight-bold rounded-0",
                    value: "1"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`लोकप्रिय`);
                      } else {
                        return [
                          createTextVNode("लोकप्रिय")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTab, {
                    class: "font-rajdhani text-subtitle-1 font-weight-bold rounded-0",
                    value: "2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`ताजा`);
                      } else {
                        return [
                          createTextVNode("ताजा")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTab, {
                      class: "font-rajdhani text-subtitle-1 font-weight-bold rounded-0",
                      value: "1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("लोकप्रिय")
                      ]),
                      _: 1
                    }),
                    createVNode(VTab, {
                      class: "font-rajdhani text-subtitle-1 font-weight-bold rounded-0",
                      value: "2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("ताजा")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VWindow, {
              modelValue: unref(tab),
              "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : tab = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VWindowItem, { value: "1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VList, { class: "pt-0" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(__props.trending, (item, index) => {
                                _push5(`<!--[-->`);
                                _push5(ssrRenderComponent(VListItem, {
                                  href: "/news/" + item["id"]
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VListItemTitle, {
                                        class: "text-h6 text-wrap line-clamp-3 font-weight-bold mb-2",
                                        style: { "line-height": "2rem", "white-space": "wrap" }
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item["title"])}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item["title"]), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VListItemTitle, {
                                          class: "text-h6 text-wrap line-clamp-3 font-weight-bold mb-2",
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
                                }, _parent5, _scopeId4));
                                if (index + 1 != __props.trending.length) {
                                  _push5(ssrRenderComponent(VDivider, null, null, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`<!--]-->`);
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.trending, (item, index) => {
                                  return openBlock(), createBlock(Fragment, null, [
                                    createVNode(VListItem, {
                                      href: "/news/" + item["id"]
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, {
                                          class: "text-h6 text-wrap line-clamp-3 font-weight-bold mb-2",
                                          style: { "line-height": "2rem", "white-space": "wrap" }
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item["title"]), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["href"]),
                                    index + 1 != __props.trending.length ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true)
                                  ], 64);
                                }), 256))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VList, { class: "pt-0" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.trending, (item, index) => {
                                return openBlock(), createBlock(Fragment, null, [
                                  createVNode(VListItem, {
                                    href: "/news/" + item["id"]
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, {
                                        class: "text-h6 text-wrap line-clamp-3 font-weight-bold mb-2",
                                        style: { "line-height": "2rem", "white-space": "wrap" }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item["title"]), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["href"]),
                                  index + 1 != __props.trending.length ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true)
                                ], 64);
                              }), 256))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VWindowItem, { value: "2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VList, { class: "pt-0" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(__props.latest, (item, index) => {
                                _push5(`<!--[-->`);
                                _push5(ssrRenderComponent(VListItem, {
                                  href: "/news/" + item["id"]
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VListItemTitle, {
                                        class: "text-h6 text-wrap line-clamp-3 font-weight-bold mb-2",
                                        style: { "line-height": "2rem", "white-space": "wrap" }
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item["title"])}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item["title"]), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VListItemTitle, {
                                          class: "text-h6 text-wrap line-clamp-3 font-weight-bold mb-2",
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
                                }, _parent5, _scopeId4));
                                if (index + 1 != __props.latest.length) {
                                  _push5(ssrRenderComponent(VDivider, null, null, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`<!--]-->`);
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.latest, (item, index) => {
                                  return openBlock(), createBlock(Fragment, null, [
                                    createVNode(VListItem, {
                                      href: "/news/" + item["id"]
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, {
                                          class: "text-h6 text-wrap line-clamp-3 font-weight-bold mb-2",
                                          style: { "line-height": "2rem", "white-space": "wrap" }
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item["title"]), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["href"]),
                                    index + 1 != __props.latest.length ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true)
                                  ], 64);
                                }), 256))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VList, { class: "pt-0" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.latest, (item, index) => {
                                return openBlock(), createBlock(Fragment, null, [
                                  createVNode(VListItem, {
                                    href: "/news/" + item["id"]
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, {
                                        class: "text-h6 text-wrap line-clamp-3 font-weight-bold mb-2",
                                        style: { "line-height": "2rem", "white-space": "wrap" }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item["title"]), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["href"]),
                                  index + 1 != __props.latest.length ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true)
                                ], 64);
                              }), 256))
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
                    createVNode(VWindowItem, { value: "1" }, {
                      default: withCtx(() => [
                        createVNode(VList, { class: "pt-0" }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.trending, (item, index) => {
                              return openBlock(), createBlock(Fragment, null, [
                                createVNode(VListItem, {
                                  href: "/news/" + item["id"]
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, {
                                      class: "text-h6 text-wrap line-clamp-3 font-weight-bold mb-2",
                                      style: { "line-height": "2rem", "white-space": "wrap" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item["title"]), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["href"]),
                                index + 1 != __props.trending.length ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true)
                              ], 64);
                            }), 256))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VWindowItem, { value: "2" }, {
                      default: withCtx(() => [
                        createVNode(VList, { class: "pt-0" }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.latest, (item, index) => {
                              return openBlock(), createBlock(Fragment, null, [
                                createVNode(VListItem, {
                                  href: "/news/" + item["id"]
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, {
                                      class: "text-h6 text-wrap line-clamp-3 font-weight-bold mb-2",
                                      style: { "line-height": "2rem", "white-space": "wrap" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item["title"]), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["href"]),
                                index + 1 != __props.latest.length ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true)
                              ], 64);
                            }), 256))
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
              createVNode(VTabs, {
                grow: "",
                color: "primary",
                modelValue: unref(tab),
                "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : tab = $event,
                "show-arrows": false
              }, {
                default: withCtx(() => [
                  createVNode(VTab, {
                    class: "font-rajdhani text-subtitle-1 font-weight-bold rounded-0",
                    value: "1"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("लोकप्रिय")
                    ]),
                    _: 1
                  }),
                  createVNode(VTab, {
                    class: "font-rajdhani text-subtitle-1 font-weight-bold rounded-0",
                    value: "2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("ताजा")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(VDivider),
              createVNode(VWindow, {
                modelValue: unref(tab),
                "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : tab = $event
              }, {
                default: withCtx(() => [
                  createVNode(VWindowItem, { value: "1" }, {
                    default: withCtx(() => [
                      createVNode(VList, { class: "pt-0" }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.trending, (item, index) => {
                            return openBlock(), createBlock(Fragment, null, [
                              createVNode(VListItem, {
                                href: "/news/" + item["id"]
                              }, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, {
                                    class: "text-h6 text-wrap line-clamp-3 font-weight-bold mb-2",
                                    style: { "line-height": "2rem", "white-space": "wrap" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item["title"]), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["href"]),
                              index + 1 != __props.trending.length ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true)
                            ], 64);
                          }), 256))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VWindowItem, { value: "2" }, {
                    default: withCtx(() => [
                      createVNode(VList, { class: "pt-0" }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.latest, (item, index) => {
                            return openBlock(), createBlock(Fragment, null, [
                              createVNode(VListItem, {
                                href: "/news/" + item["id"]
                              }, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, {
                                    class: "text-h6 text-wrap line-clamp-3 font-weight-bold mb-2",
                                    style: { "line-height": "2rem", "white-space": "wrap" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item["title"]), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["href"]),
                              index + 1 != __props.latest.length ? (openBlock(), createBlock(VDivider, { key: 0 })) : createCommentVNode("", true)
                            ], 64);
                          }), 256))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/shared/tabnews.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
