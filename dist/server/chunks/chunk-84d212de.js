import { withCtx, createTextVNode, toDisplayString, createVNode, mergeProps, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { VAvatar } from "vuetify/lib/components/VAvatar/index.mjs";
import { VBtn } from "vuetify/lib/components/VBtn/index.mjs";
import { VCard } from "vuetify/lib/components/VCard/index.mjs";
import { VRow, VCol, VSpacer } from "vuetify/lib/components/VGrid/index.mjs";
import { VHover } from "vuetify/lib/components/VHover/index.mjs";
import { VImg } from "vuetify/lib/components/VImg/index.mjs";
import { VList, VListItem, VListItemTitle } from "vuetify/lib/components/VList/index.mjs";
const _sfc_main = {
  __name: "TwoFour",
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
                  _push3(ssrRenderComponent(VRow, { align: "center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "12"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex align-center"${_scopeId4}><span class="font-rajdhani text-h3 font-weight-bold"${_scopeId4}>${ssrInterpolate(__props.data["name"])}</span>`);
                              _push5(ssrRenderComponent(VSpacer, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                rounded: "",
                                variant: "tonal",
                                color: "primary",
                                href: "/category/" + __props.data["slug"]
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` थप ${ssrInterpolate(__props.data["name"])} समाचार `);
                                  } else {
                                    return [
                                      createTextVNode(" थप " + toDisplayString(__props.data["name"]) + " समाचार ", 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex align-center" }, [
                                  createVNode("span", { class: "font-rajdhani text-h3 font-weight-bold" }, toDisplayString(__props.data["name"]), 1),
                                  createVNode(VSpacer),
                                  createVNode(VBtn, {
                                    rounded: "",
                                    variant: "tonal",
                                    color: "primary",
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            md: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex align-center" }, [
                                createVNode("span", { class: "font-rajdhani text-h3 font-weight-bold" }, toDisplayString(__props.data["name"]), 1),
                                createVNode(VSpacer),
                                createVNode(VBtn, {
                                  rounded: "",
                                  variant: "tonal",
                                  color: "primary",
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
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VRow, { align: "center" }, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          md: "12"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode("span", { class: "font-rajdhani text-h3 font-weight-bold" }, toDisplayString(__props.data["name"]), 1),
                              createVNode(VSpacer),
                              createVNode(VBtn, {
                                rounded: "",
                                variant: "tonal",
                                color: "primary",
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
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "7"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "6",
                          md: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VHover, null, {
                                default: withCtx(({ isHovering, props }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCard, {
                                      variant: "text",
                                      class: "mb-3",
                                      href: "/news/" + __props.data.news[0].id
                                    }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VImg, mergeProps({
                                            cover: "",
                                            height: "516"
                                          }, props, {
                                            class: ["pa-4 align-end", isHovering ? "zoom" : ""],
                                            src: __props.data.news[0].image,
                                            alt: __props.data.news[0].media[0].file_name
                                          }), {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCard, { style: { "background-color": "rgba(\n                                            var(--v-theme-background),\n                                            0.8\n                                        )", "backdrop-filter": "blur(10px)" } }, {
                                                  default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VList, { class: "bg-transparent" }, {
                                                        default: withCtx((_8, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VListItem, null, {
                                                              default: withCtx((_9, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(VListItemTitle, {
                                                                    class: "text-h5 text-wrap font-weight-bold mb-2",
                                                                    style: { "line-height": "2rem" }
                                                                  }, {
                                                                    default: withCtx((_10, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(`${ssrInterpolate(__props.data.news[0].title)}`);
                                                                      } else {
                                                                        return [
                                                                          createTextVNode(toDisplayString(__props.data.news[0].title), 1)
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 2
                                                                  }, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(VListItemTitle, {
                                                                      class: "text-h5 text-wrap font-weight-bold mb-2",
                                                                      style: { "line-height": "2rem" }
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(toDisplayString(__props.data.news[0].title), 1)
                                                                      ]),
                                                                      _: 1
                                                                    })
                                                                  ];
                                                                }
                                                              }),
                                                              _: 2
                                                            }, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VListItem, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(VListItemTitle, {
                                                                    class: "text-h5 text-wrap font-weight-bold mb-2",
                                                                    style: { "line-height": "2rem" }
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(toDisplayString(__props.data.news[0].title), 1)
                                                                    ]),
                                                                    _: 1
                                                                  })
                                                                ]),
                                                                _: 1
                                                              })
                                                            ];
                                                          }
                                                        }),
                                                        _: 2
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VList, { class: "bg-transparent" }, {
                                                          default: withCtx(() => [
                                                            createVNode(VListItem, null, {
                                                              default: withCtx(() => [
                                                                createVNode(VListItemTitle, {
                                                                  class: "text-h5 text-wrap font-weight-bold mb-2",
                                                                  style: { "line-height": "2rem" }
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(__props.data.news[0].title), 1)
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
                                                  _: 2
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCard, { style: { "background-color": "rgba(\n                                            var(--v-theme-background),\n                                            0.8\n                                        )", "backdrop-filter": "blur(10px)" } }, {
                                                    default: withCtx(() => [
                                                      createVNode(VList, { class: "bg-transparent" }, {
                                                        default: withCtx(() => [
                                                          createVNode(VListItem, null, {
                                                            default: withCtx(() => [
                                                              createVNode(VListItemTitle, {
                                                                class: "text-h5 text-wrap font-weight-bold mb-2",
                                                                style: { "line-height": "2rem" }
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(__props.data.news[0].title), 1)
                                                                ]),
                                                                _: 1
                                                              })
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
                                            _: 2
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VImg, mergeProps({
                                              cover: "",
                                              height: "516"
                                            }, props, {
                                              class: ["pa-4 align-end", isHovering ? "zoom" : ""],
                                              src: __props.data.news[0].image,
                                              alt: __props.data.news[0].media[0].file_name
                                            }), {
                                              default: withCtx(() => [
                                                createVNode(VCard, { style: { "background-color": "rgba(\n                                            var(--v-theme-background),\n                                            0.8\n                                        )", "backdrop-filter": "blur(10px)" } }, {
                                                  default: withCtx(() => [
                                                    createVNode(VList, { class: "bg-transparent" }, {
                                                      default: withCtx(() => [
                                                        createVNode(VListItem, null, {
                                                          default: withCtx(() => [
                                                            createVNode(VListItemTitle, {
                                                              class: "text-h5 text-wrap font-weight-bold mb-2",
                                                              style: { "line-height": "2rem" }
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(__props.data.news[0].title), 1)
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 2
                                            }, 1040, ["class", "src", "alt"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCard, {
                                        variant: "text",
                                        class: "mb-3",
                                        href: "/news/" + __props.data.news[0].id
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VImg, mergeProps({
                                            cover: "",
                                            height: "516"
                                          }, props, {
                                            class: ["pa-4 align-end", isHovering ? "zoom" : ""],
                                            src: __props.data.news[0].image,
                                            alt: __props.data.news[0].media[0].file_name
                                          }), {
                                            default: withCtx(() => [
                                              createVNode(VCard, { style: { "background-color": "rgba(\n                                            var(--v-theme-background),\n                                            0.8\n                                        )", "backdrop-filter": "blur(10px)" } }, {
                                                default: withCtx(() => [
                                                  createVNode(VList, { class: "bg-transparent" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VListItem, null, {
                                                        default: withCtx(() => [
                                                          createVNode(VListItemTitle, {
                                                            class: "text-h5 text-wrap font-weight-bold mb-2",
                                                            style: { "line-height": "2rem" }
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(__props.data.news[0].title), 1)
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 2
                                          }, 1040, ["class", "src", "alt"])
                                        ]),
                                        _: 2
                                      }, 1032, ["href"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VHover, null, {
                                  default: withCtx(({ isHovering, props }) => [
                                    createVNode(VCard, {
                                      variant: "text",
                                      class: "mb-3",
                                      href: "/news/" + __props.data.news[0].id
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VImg, mergeProps({
                                          cover: "",
                                          height: "516"
                                        }, props, {
                                          class: ["pa-4 align-end", isHovering ? "zoom" : ""],
                                          src: __props.data.news[0].image,
                                          alt: __props.data.news[0].media[0].file_name
                                        }), {
                                          default: withCtx(() => [
                                            createVNode(VCard, { style: { "background-color": "rgba(\n                                            var(--v-theme-background),\n                                            0.8\n                                        )", "backdrop-filter": "blur(10px)" } }, {
                                              default: withCtx(() => [
                                                createVNode(VList, { class: "bg-transparent" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VListItem, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VListItemTitle, {
                                                          class: "text-h5 text-wrap font-weight-bold mb-2",
                                                          style: { "line-height": "2rem" }
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(__props.data.news[0].title), 1)
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 2
                                        }, 1040, ["class", "src", "alt"])
                                      ]),
                                      _: 2
                                    }, 1032, ["href"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "6",
                          md: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VHover, null, {
                                default: withCtx(({ isHovering, props }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCard, {
                                      variant: "text",
                                      href: "/news/" + __props.data.news[1].id
                                    }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VImg, mergeProps({
                                            cover: "",
                                            height: "516"
                                          }, props, {
                                            class: ["pa-4 align-end", isHovering ? "zoom" : ""],
                                            src: __props.data.news[1].image,
                                            alt: __props.data.news[1].media[0].file_name
                                          }), {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCard, { style: { "background-color": "rgba(\n                                            var(--v-theme-background),\n                                            0.8\n                                        )", "backdrop-filter": "blur(10px)" } }, {
                                                  default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VList, { class: "bg-transparent" }, {
                                                        default: withCtx((_8, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VListItem, null, {
                                                              default: withCtx((_9, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(VListItemTitle, {
                                                                    class: "text-h5 text-wrap font-weight-bold mb-2",
                                                                    style: { "line-height": "2rem" }
                                                                  }, {
                                                                    default: withCtx((_10, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(`${ssrInterpolate(__props.data.news[1].title)}`);
                                                                      } else {
                                                                        return [
                                                                          createTextVNode(toDisplayString(__props.data.news[1].title), 1)
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 2
                                                                  }, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(VListItemTitle, {
                                                                      class: "text-h5 text-wrap font-weight-bold mb-2",
                                                                      style: { "line-height": "2rem" }
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(toDisplayString(__props.data.news[1].title), 1)
                                                                      ]),
                                                                      _: 1
                                                                    })
                                                                  ];
                                                                }
                                                              }),
                                                              _: 2
                                                            }, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VListItem, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(VListItemTitle, {
                                                                    class: "text-h5 text-wrap font-weight-bold mb-2",
                                                                    style: { "line-height": "2rem" }
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(toDisplayString(__props.data.news[1].title), 1)
                                                                    ]),
                                                                    _: 1
                                                                  })
                                                                ]),
                                                                _: 1
                                                              })
                                                            ];
                                                          }
                                                        }),
                                                        _: 2
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VList, { class: "bg-transparent" }, {
                                                          default: withCtx(() => [
                                                            createVNode(VListItem, null, {
                                                              default: withCtx(() => [
                                                                createVNode(VListItemTitle, {
                                                                  class: "text-h5 text-wrap font-weight-bold mb-2",
                                                                  style: { "line-height": "2rem" }
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(__props.data.news[1].title), 1)
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
                                                  _: 2
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCard, { style: { "background-color": "rgba(\n                                            var(--v-theme-background),\n                                            0.8\n                                        )", "backdrop-filter": "blur(10px)" } }, {
                                                    default: withCtx(() => [
                                                      createVNode(VList, { class: "bg-transparent" }, {
                                                        default: withCtx(() => [
                                                          createVNode(VListItem, null, {
                                                            default: withCtx(() => [
                                                              createVNode(VListItemTitle, {
                                                                class: "text-h5 text-wrap font-weight-bold mb-2",
                                                                style: { "line-height": "2rem" }
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(__props.data.news[1].title), 1)
                                                                ]),
                                                                _: 1
                                                              })
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
                                            _: 2
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VImg, mergeProps({
                                              cover: "",
                                              height: "516"
                                            }, props, {
                                              class: ["pa-4 align-end", isHovering ? "zoom" : ""],
                                              src: __props.data.news[1].image,
                                              alt: __props.data.news[1].media[0].file_name
                                            }), {
                                              default: withCtx(() => [
                                                createVNode(VCard, { style: { "background-color": "rgba(\n                                            var(--v-theme-background),\n                                            0.8\n                                        )", "backdrop-filter": "blur(10px)" } }, {
                                                  default: withCtx(() => [
                                                    createVNode(VList, { class: "bg-transparent" }, {
                                                      default: withCtx(() => [
                                                        createVNode(VListItem, null, {
                                                          default: withCtx(() => [
                                                            createVNode(VListItemTitle, {
                                                              class: "text-h5 text-wrap font-weight-bold mb-2",
                                                              style: { "line-height": "2rem" }
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(__props.data.news[1].title), 1)
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 2
                                            }, 1040, ["class", "src", "alt"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCard, {
                                        variant: "text",
                                        href: "/news/" + __props.data.news[1].id
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VImg, mergeProps({
                                            cover: "",
                                            height: "516"
                                          }, props, {
                                            class: ["pa-4 align-end", isHovering ? "zoom" : ""],
                                            src: __props.data.news[1].image,
                                            alt: __props.data.news[1].media[0].file_name
                                          }), {
                                            default: withCtx(() => [
                                              createVNode(VCard, { style: { "background-color": "rgba(\n                                            var(--v-theme-background),\n                                            0.8\n                                        )", "backdrop-filter": "blur(10px)" } }, {
                                                default: withCtx(() => [
                                                  createVNode(VList, { class: "bg-transparent" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VListItem, null, {
                                                        default: withCtx(() => [
                                                          createVNode(VListItemTitle, {
                                                            class: "text-h5 text-wrap font-weight-bold mb-2",
                                                            style: { "line-height": "2rem" }
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(__props.data.news[1].title), 1)
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 2
                                          }, 1040, ["class", "src", "alt"])
                                        ]),
                                        _: 2
                                      }, 1032, ["href"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VHover, null, {
                                  default: withCtx(({ isHovering, props }) => [
                                    createVNode(VCard, {
                                      variant: "text",
                                      href: "/news/" + __props.data.news[1].id
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VImg, mergeProps({
                                          cover: "",
                                          height: "516"
                                        }, props, {
                                          class: ["pa-4 align-end", isHovering ? "zoom" : ""],
                                          src: __props.data.news[1].image,
                                          alt: __props.data.news[1].media[0].file_name
                                        }), {
                                          default: withCtx(() => [
                                            createVNode(VCard, { style: { "background-color": "rgba(\n                                            var(--v-theme-background),\n                                            0.8\n                                        )", "backdrop-filter": "blur(10px)" } }, {
                                              default: withCtx(() => [
                                                createVNode(VList, { class: "bg-transparent" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VListItem, null, {
                                                      default: withCtx(() => [
                                                        createVNode(VListItemTitle, {
                                                          class: "text-h5 text-wrap font-weight-bold mb-2",
                                                          style: { "line-height": "2rem" }
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(__props.data.news[1].title), 1)
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 2
                                        }, 1040, ["class", "src", "alt"])
                                      ]),
                                      _: 2
                                    }, 1032, ["href"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VHover, null, {
                                default: withCtx(({ isHovering, props }) => [
                                  createVNode(VCard, {
                                    variant: "text",
                                    class: "mb-3",
                                    href: "/news/" + __props.data.news[0].id
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VImg, mergeProps({
                                        cover: "",
                                        height: "516"
                                      }, props, {
                                        class: ["pa-4 align-end", isHovering ? "zoom" : ""],
                                        src: __props.data.news[0].image,
                                        alt: __props.data.news[0].media[0].file_name
                                      }), {
                                        default: withCtx(() => [
                                          createVNode(VCard, { style: { "background-color": "rgba(\n                                            var(--v-theme-background),\n                                            0.8\n                                        )", "backdrop-filter": "blur(10px)" } }, {
                                            default: withCtx(() => [
                                              createVNode(VList, { class: "bg-transparent" }, {
                                                default: withCtx(() => [
                                                  createVNode(VListItem, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, {
                                                        class: "text-h5 text-wrap font-weight-bold mb-2",
                                                        style: { "line-height": "2rem" }
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(__props.data.news[0].title), 1)
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1040, ["class", "src", "alt"])
                                    ]),
                                    _: 2
                                  }, 1032, ["href"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VHover, null, {
                                default: withCtx(({ isHovering, props }) => [
                                  createVNode(VCard, {
                                    variant: "text",
                                    href: "/news/" + __props.data.news[1].id
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VImg, mergeProps({
                                        cover: "",
                                        height: "516"
                                      }, props, {
                                        class: ["pa-4 align-end", isHovering ? "zoom" : ""],
                                        src: __props.data.news[1].image,
                                        alt: __props.data.news[1].media[0].file_name
                                      }), {
                                        default: withCtx(() => [
                                          createVNode(VCard, { style: { "background-color": "rgba(\n                                            var(--v-theme-background),\n                                            0.8\n                                        )", "backdrop-filter": "blur(10px)" } }, {
                                            default: withCtx(() => [
                                              createVNode(VList, { class: "bg-transparent" }, {
                                                default: withCtx(() => [
                                                  createVNode(VListItem, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, {
                                                        class: "text-h5 text-wrap font-weight-bold mb-2",
                                                        style: { "line-height": "2rem" }
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(__props.data.news[1].title), 1)
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1040, ["class", "src", "alt"])
                                    ]),
                                    _: 2
                                  }, 1032, ["href"])
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VHover, null, {
                              default: withCtx(({ isHovering, props }) => [
                                createVNode(VCard, {
                                  variant: "text",
                                  class: "mb-3",
                                  href: "/news/" + __props.data.news[0].id
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VImg, mergeProps({
                                      cover: "",
                                      height: "516"
                                    }, props, {
                                      class: ["pa-4 align-end", isHovering ? "zoom" : ""],
                                      src: __props.data.news[0].image,
                                      alt: __props.data.news[0].media[0].file_name
                                    }), {
                                      default: withCtx(() => [
                                        createVNode(VCard, { style: { "background-color": "rgba(\n                                            var(--v-theme-background),\n                                            0.8\n                                        )", "backdrop-filter": "blur(10px)" } }, {
                                          default: withCtx(() => [
                                            createVNode(VList, { class: "bg-transparent" }, {
                                              default: withCtx(() => [
                                                createVNode(VListItem, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VListItemTitle, {
                                                      class: "text-h5 text-wrap font-weight-bold mb-2",
                                                      style: { "line-height": "2rem" }
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(__props.data.news[0].title), 1)
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 2
                                    }, 1040, ["class", "src", "alt"])
                                  ]),
                                  _: 2
                                }, 1032, ["href"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VHover, null, {
                              default: withCtx(({ isHovering, props }) => [
                                createVNode(VCard, {
                                  variant: "text",
                                  href: "/news/" + __props.data.news[1].id
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VImg, mergeProps({
                                      cover: "",
                                      height: "516"
                                    }, props, {
                                      class: ["pa-4 align-end", isHovering ? "zoom" : ""],
                                      src: __props.data.news[1].image,
                                      alt: __props.data.news[1].media[0].file_name
                                    }), {
                                      default: withCtx(() => [
                                        createVNode(VCard, { style: { "background-color": "rgba(\n                                            var(--v-theme-background),\n                                            0.8\n                                        )", "backdrop-filter": "blur(10px)" } }, {
                                          default: withCtx(() => [
                                            createVNode(VList, { class: "bg-transparent" }, {
                                              default: withCtx(() => [
                                                createVNode(VListItem, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VListItemTitle, {
                                                      class: "text-h5 text-wrap font-weight-bold mb-2",
                                                      style: { "line-height": "2rem" }
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(__props.data.news[1].title), 1)
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 2
                                    }, 1040, ["class", "src", "alt"])
                                  ]),
                                  _: 2
                                }, 1032, ["href"])
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "5"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VList, {
                    color: "primary",
                    class: "py-0 pl-0 bg-transparent"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(__props.data["news"], (item, index) => {
                          _push4(ssrRenderComponent(VHover, null, {
                            default: withCtx(({ isHovering, props }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (index > 1 && index <= 5) {
                                  _push5(ssrRenderComponent(VListItem, mergeProps({
                                    href: "/news/" + item["id"]
                                  }, props, { class: "py-0 pl-0 mb-3" }), {
                                    prepend: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VAvatar, {
                                          rounded: "lg",
                                          size: "auto"
                                        }, {
                                          default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(VImg, {
                                                cover: "",
                                                width: "150",
                                                height: "120",
                                                class: isHovering ? "zoom" : "",
                                                src: item["image"]
                                              }, null, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(VImg, {
                                                  cover: "",
                                                  width: "150",
                                                  height: "120",
                                                  class: isHovering ? "zoom" : "",
                                                  src: item["image"]
                                                }, null, 8, ["class", "src"])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(VAvatar, {
                                            rounded: "lg",
                                            size: "auto"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VImg, {
                                                cover: "",
                                                width: "150",
                                                height: "120",
                                                class: isHovering ? "zoom" : "",
                                                src: item["image"]
                                              }, null, 8, ["class", "src"])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ];
                                      }
                                    }),
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VListItemTitle, {
                                          class: "text-h5 text-wrap line-clamp-3 font-weight-bold",
                                          style: { "line-height": "2rem", "white-space": "wrap" }
                                        }, {
                                          default: withCtx((_5, _push7, _parent7, _scopeId6) => {
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
                                            class: "text-h5 text-wrap line-clamp-3 font-weight-bold",
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
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  index > 1 && index <= 5 ? (openBlock(), createBlock(VListItem, mergeProps({
                                    key: 0,
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
                                            width: "150",
                                            height: "120",
                                            class: isHovering ? "zoom" : "",
                                            src: item["image"]
                                          }, null, 8, ["class", "src"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, {
                                        class: "text-h5 text-wrap line-clamp-3 font-weight-bold",
                                        style: { "line-height": "2rem", "white-space": "wrap" }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item["title"]), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1040, ["href"])) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.data["news"], (item, index) => {
                            return openBlock(), createBlock(VHover, null, {
                              default: withCtx(({ isHovering, props }) => [
                                index > 1 && index <= 5 ? (openBlock(), createBlock(VListItem, mergeProps({
                                  key: 0,
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
                                          width: "150",
                                          height: "120",
                                          class: isHovering ? "zoom" : "",
                                          src: item["image"]
                                        }, null, 8, ["class", "src"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, {
                                      class: "text-h5 text-wrap line-clamp-3 font-weight-bold",
                                      style: { "line-height": "2rem", "white-space": "wrap" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item["title"]), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1040, ["href"])) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024);
                          }), 256))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VList, {
                      color: "primary",
                      class: "py-0 pl-0 bg-transparent"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.data["news"], (item, index) => {
                          return openBlock(), createBlock(VHover, null, {
                            default: withCtx(({ isHovering, props }) => [
                              index > 1 && index <= 5 ? (openBlock(), createBlock(VListItem, mergeProps({
                                key: 0,
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
                                        width: "150",
                                        height: "120",
                                        class: isHovering ? "zoom" : "",
                                        src: item["image"]
                                      }, null, 8, ["class", "src"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, {
                                    class: "text-h5 text-wrap line-clamp-3 font-weight-bold",
                                    style: { "line-height": "2rem", "white-space": "wrap" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item["title"]), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1040, ["href"])) : createCommentVNode("", true)
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VRow, { align: "center" }, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "12"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex align-center" }, [
                            createVNode("span", { class: "font-rajdhani text-h3 font-weight-bold" }, toDisplayString(__props.data["name"]), 1),
                            createVNode(VSpacer),
                            createVNode(VBtn, {
                              rounded: "",
                              variant: "tonal",
                              color: "primary",
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
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "7"
              }, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        sm: "6",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VHover, null, {
                            default: withCtx(({ isHovering, props }) => [
                              createVNode(VCard, {
                                variant: "text",
                                class: "mb-3",
                                href: "/news/" + __props.data.news[0].id
                              }, {
                                default: withCtx(() => [
                                  createVNode(VImg, mergeProps({
                                    cover: "",
                                    height: "516"
                                  }, props, {
                                    class: ["pa-4 align-end", isHovering ? "zoom" : ""],
                                    src: __props.data.news[0].image,
                                    alt: __props.data.news[0].media[0].file_name
                                  }), {
                                    default: withCtx(() => [
                                      createVNode(VCard, { style: { "background-color": "rgba(\n                                            var(--v-theme-background),\n                                            0.8\n                                        )", "backdrop-filter": "blur(10px)" } }, {
                                        default: withCtx(() => [
                                          createVNode(VList, { class: "bg-transparent" }, {
                                            default: withCtx(() => [
                                              createVNode(VListItem, null, {
                                                default: withCtx(() => [
                                                  createVNode(VListItemTitle, {
                                                    class: "text-h5 text-wrap font-weight-bold mb-2",
                                                    style: { "line-height": "2rem" }
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(__props.data.news[0].title), 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1040, ["class", "src", "alt"])
                                ]),
                                _: 2
                              }, 1032, ["href"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        sm: "6",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VHover, null, {
                            default: withCtx(({ isHovering, props }) => [
                              createVNode(VCard, {
                                variant: "text",
                                href: "/news/" + __props.data.news[1].id
                              }, {
                                default: withCtx(() => [
                                  createVNode(VImg, mergeProps({
                                    cover: "",
                                    height: "516"
                                  }, props, {
                                    class: ["pa-4 align-end", isHovering ? "zoom" : ""],
                                    src: __props.data.news[1].image,
                                    alt: __props.data.news[1].media[0].file_name
                                  }), {
                                    default: withCtx(() => [
                                      createVNode(VCard, { style: { "background-color": "rgba(\n                                            var(--v-theme-background),\n                                            0.8\n                                        )", "backdrop-filter": "blur(10px)" } }, {
                                        default: withCtx(() => [
                                          createVNode(VList, { class: "bg-transparent" }, {
                                            default: withCtx(() => [
                                              createVNode(VListItem, null, {
                                                default: withCtx(() => [
                                                  createVNode(VListItemTitle, {
                                                    class: "text-h5 text-wrap font-weight-bold mb-2",
                                                    style: { "line-height": "2rem" }
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(__props.data.news[1].title), 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1040, ["class", "src", "alt"])
                                ]),
                                _: 2
                              }, 1032, ["href"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "5"
              }, {
                default: withCtx(() => [
                  createVNode(VList, {
                    color: "primary",
                    class: "py-0 pl-0 bg-transparent"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.data["news"], (item, index) => {
                        return openBlock(), createBlock(VHover, null, {
                          default: withCtx(({ isHovering, props }) => [
                            index > 1 && index <= 5 ? (openBlock(), createBlock(VListItem, mergeProps({
                              key: 0,
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
                                      width: "150",
                                      height: "120",
                                      class: isHovering ? "zoom" : "",
                                      src: item["image"]
                                    }, null, 8, ["class", "src"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, {
                                  class: "text-h5 text-wrap line-clamp-3 font-weight-bold",
                                  style: { "line-height": "2rem", "white-space": "wrap" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item["title"]), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1040, ["href"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/shared/home/layouts/TwoFour.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
