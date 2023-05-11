import { withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, mergeProps, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { VAvatar } from "vuetify/lib/components/VAvatar/index.mjs";
import { VCard } from "vuetify/lib/components/VCard/index.mjs";
import { VChip } from "vuetify/lib/components/VChip/index.mjs";
import { VChipGroup } from "vuetify/lib/components/VChipGroup/index.mjs";
import { VContainer, VRow, VCol } from "vuetify/lib/components/VGrid/index.mjs";
import { VHover } from "vuetify/lib/components/VHover/index.mjs";
import { VImg } from "vuetify/lib/components/VImg/index.mjs";
import { VList, VListItem, VListItemTitle } from "vuetify/lib/components/VList/index.mjs";
const _sfc_main = {
  __name: "provincenews",
  __ssrInlineRender: true,
  props: {
    provincenews: Object,
    provinces: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, { align: "center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="font-rajdhani text-h3 font-weight-bold"${_scopeId5}> प्रदेश समाचार </div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "font-rajdhani text-h3 font-weight-bold" }, " प्रदेश समाचार ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "8"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VChipGroup, { class: "justify-space-between" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(__props.provinces, (item) => {
                                            _push7(ssrRenderComponent(VChip, {
                                              class: "font-rajdhani font-weight-bold text-subtitle-1 mb-2",
                                              href: "/province/" + item["name"],
                                              style: { "max-width": "min-content !important" }
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(item["name"])}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(item["name"]), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(true), createBlock(Fragment, null, renderList(__props.provinces, (item) => {
                                              return openBlock(), createBlock(VChip, {
                                                class: "font-rajdhani font-weight-bold text-subtitle-1 mb-2",
                                                href: "/province/" + item["name"],
                                                style: { "max-width": "min-content !important" }
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item["name"]), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["href"]);
                                            }), 256))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VChipGroup, { class: "justify-space-between" }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(__props.provinces, (item) => {
                                            return openBlock(), createBlock(VChip, {
                                              class: "font-rajdhani font-weight-bold text-subtitle-1 mb-2",
                                              href: "/province/" + item["name"],
                                              style: { "max-width": "min-content !important" }
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item["name"]), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["href"]);
                                          }), 256))
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "font-rajdhani text-h3 font-weight-bold" }, " प्रदेश समाचार ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "8"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VChipGroup, { class: "justify-space-between" }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.provinces, (item) => {
                                          return openBlock(), createBlock(VChip, {
                                            class: "font-rajdhani font-weight-bold text-subtitle-1 mb-2",
                                            href: "/province/" + item["name"],
                                            style: { "max-width": "min-content !important" }
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item["name"]), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["href"]);
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, { align: "center" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "font-rajdhani text-h3 font-weight-bold" }, " प्रदेश समाचार ")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "8"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VChipGroup, { class: "justify-space-between" }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.provinces, (item) => {
                                        return openBlock(), createBlock(VChip, {
                                          class: "font-rajdhani font-weight-bold text-subtitle-1 mb-2",
                                          href: "/province/" + item["name"],
                                          style: { "max-width": "min-content !important" }
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item["name"]), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["href"]);
                                      }), 256))
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "7"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VHover, null, {
                                      default: withCtx(({ isHovering, props }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCard, {
                                            variant: "text",
                                            class: "mb-3",
                                            href: "/news/" + __props.provincenews[0].id
                                          }, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VImg, mergeProps({
                                                  cover: "",
                                                  height: "516"
                                                }, props, {
                                                  class: ["pa-4 align-end", isHovering ? "zoom" : ""],
                                                  src: __props.provincenews[0].image,
                                                  alt: __props.provincenews[0].media[0].file_name
                                                }), {
                                                  default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VCard, { style: { "background-color": "rgba(\n                                                var(--v-theme-background),\n                                                0.8\n                                            )", "backdrop-filter": "blur(10px)" } }, {
                                                        default: withCtx((_8, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VList, { class: "bg-transparent" }, {
                                                              default: withCtx((_9, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(VListItem, null, {
                                                                    default: withCtx((_10, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(VListItemTitle, {
                                                                          class: "text-h5 text-wrap font-weight-bold mb-2",
                                                                          style: { "line-height": "2rem" }
                                                                        }, {
                                                                          default: withCtx((_11, _push13, _parent13, _scopeId12) => {
                                                                            if (_push13) {
                                                                              _push13(`${ssrInterpolate(__props.provincenews[0].title)}`);
                                                                            } else {
                                                                              return [
                                                                                createTextVNode(toDisplayString(__props.provincenews[0].title), 1)
                                                                              ];
                                                                            }
                                                                          }),
                                                                          _: 2
                                                                        }, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(VListItemTitle, {
                                                                            class: "text-h5 text-wrap font-weight-bold mb-2",
                                                                            style: { "line-height": "2rem" }
                                                                          }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode(toDisplayString(__props.provincenews[0].title), 1)
                                                                            ]),
                                                                            _: 1
                                                                          })
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 2
                                                                  }, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(VListItem, null, {
                                                                      default: withCtx(() => [
                                                                        createVNode(VListItemTitle, {
                                                                          class: "text-h5 text-wrap font-weight-bold mb-2",
                                                                          style: { "line-height": "2rem" }
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode(toDisplayString(__props.provincenews[0].title), 1)
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
                                                            }, _parent10, _scopeId9));
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
                                                                          createTextVNode(toDisplayString(__props.provincenews[0].title), 1)
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
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VCard, { style: { "background-color": "rgba(\n                                                var(--v-theme-background),\n                                                0.8\n                                            )", "backdrop-filter": "blur(10px)" } }, {
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
                                                                        createTextVNode(toDisplayString(__props.provincenews[0].title), 1)
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
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VImg, mergeProps({
                                                    cover: "",
                                                    height: "516"
                                                  }, props, {
                                                    class: ["pa-4 align-end", isHovering ? "zoom" : ""],
                                                    src: __props.provincenews[0].image,
                                                    alt: __props.provincenews[0].media[0].file_name
                                                  }), {
                                                    default: withCtx(() => [
                                                      createVNode(VCard, { style: { "background-color": "rgba(\n                                                var(--v-theme-background),\n                                                0.8\n                                            )", "backdrop-filter": "blur(10px)" } }, {
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
                                                                      createTextVNode(toDisplayString(__props.provincenews[0].title), 1)
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCard, {
                                              variant: "text",
                                              class: "mb-3",
                                              href: "/news/" + __props.provincenews[0].id
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VImg, mergeProps({
                                                  cover: "",
                                                  height: "516"
                                                }, props, {
                                                  class: ["pa-4 align-end", isHovering ? "zoom" : ""],
                                                  src: __props.provincenews[0].image,
                                                  alt: __props.provincenews[0].media[0].file_name
                                                }), {
                                                  default: withCtx(() => [
                                                    createVNode(VCard, { style: { "background-color": "rgba(\n                                                var(--v-theme-background),\n                                                0.8\n                                            )", "backdrop-filter": "blur(10px)" } }, {
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
                                                                    createTextVNode(toDisplayString(__props.provincenews[0].title), 1)
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VHover, null, {
                                        default: withCtx(({ isHovering, props }) => [
                                          createVNode(VCard, {
                                            variant: "text",
                                            class: "mb-3",
                                            href: "/news/" + __props.provincenews[0].id
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VImg, mergeProps({
                                                cover: "",
                                                height: "516"
                                              }, props, {
                                                class: ["pa-4 align-end", isHovering ? "zoom" : ""],
                                                src: __props.provincenews[0].image,
                                                alt: __props.provincenews[0].media[0].file_name
                                              }), {
                                                default: withCtx(() => [
                                                  createVNode(VCard, { style: { "background-color": "rgba(\n                                                var(--v-theme-background),\n                                                0.8\n                                            )", "backdrop-filter": "blur(10px)" } }, {
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
                                                                  createTextVNode(toDisplayString(__props.provincenews[0].title), 1)
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VHover, null, {
                                      default: withCtx(({ isHovering, props }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCard, {
                                            variant: "text",
                                            href: "/news/" + __props.provincenews[1].id
                                          }, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VImg, mergeProps({
                                                  cover: "",
                                                  height: "516"
                                                }, props, {
                                                  class: ["pa-4 align-end", isHovering ? "zoom" : ""],
                                                  src: __props.provincenews[1].image,
                                                  alt: __props.provincenews[1].media[0].file_name
                                                }), {
                                                  default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VCard, { style: { "background-color": "rgba(\n                                                var(--v-theme-background),\n                                                0.8\n                                            )", "backdrop-filter": "blur(10px)" } }, {
                                                        default: withCtx((_8, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VList, { class: "bg-transparent" }, {
                                                              default: withCtx((_9, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(VListItem, null, {
                                                                    default: withCtx((_10, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(VListItemTitle, {
                                                                          class: "text-h5 text-wrap font-weight-bold mb-2",
                                                                          style: { "line-height": "2rem" }
                                                                        }, {
                                                                          default: withCtx((_11, _push13, _parent13, _scopeId12) => {
                                                                            if (_push13) {
                                                                              _push13(`${ssrInterpolate(__props.provincenews[1].title)}`);
                                                                            } else {
                                                                              return [
                                                                                createTextVNode(toDisplayString(__props.provincenews[1].title), 1)
                                                                              ];
                                                                            }
                                                                          }),
                                                                          _: 2
                                                                        }, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(VListItemTitle, {
                                                                            class: "text-h5 text-wrap font-weight-bold mb-2",
                                                                            style: { "line-height": "2rem" }
                                                                          }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode(toDisplayString(__props.provincenews[1].title), 1)
                                                                            ]),
                                                                            _: 1
                                                                          })
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 2
                                                                  }, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(VListItem, null, {
                                                                      default: withCtx(() => [
                                                                        createVNode(VListItemTitle, {
                                                                          class: "text-h5 text-wrap font-weight-bold mb-2",
                                                                          style: { "line-height": "2rem" }
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode(toDisplayString(__props.provincenews[1].title), 1)
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
                                                            }, _parent10, _scopeId9));
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
                                                                          createTextVNode(toDisplayString(__props.provincenews[1].title), 1)
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
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VCard, { style: { "background-color": "rgba(\n                                                var(--v-theme-background),\n                                                0.8\n                                            )", "backdrop-filter": "blur(10px)" } }, {
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
                                                                        createTextVNode(toDisplayString(__props.provincenews[1].title), 1)
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
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VImg, mergeProps({
                                                    cover: "",
                                                    height: "516"
                                                  }, props, {
                                                    class: ["pa-4 align-end", isHovering ? "zoom" : ""],
                                                    src: __props.provincenews[1].image,
                                                    alt: __props.provincenews[1].media[0].file_name
                                                  }), {
                                                    default: withCtx(() => [
                                                      createVNode(VCard, { style: { "background-color": "rgba(\n                                                var(--v-theme-background),\n                                                0.8\n                                            )", "backdrop-filter": "blur(10px)" } }, {
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
                                                                      createTextVNode(toDisplayString(__props.provincenews[1].title), 1)
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCard, {
                                              variant: "text",
                                              href: "/news/" + __props.provincenews[1].id
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VImg, mergeProps({
                                                  cover: "",
                                                  height: "516"
                                                }, props, {
                                                  class: ["pa-4 align-end", isHovering ? "zoom" : ""],
                                                  src: __props.provincenews[1].image,
                                                  alt: __props.provincenews[1].media[0].file_name
                                                }), {
                                                  default: withCtx(() => [
                                                    createVNode(VCard, { style: { "background-color": "rgba(\n                                                var(--v-theme-background),\n                                                0.8\n                                            )", "backdrop-filter": "blur(10px)" } }, {
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
                                                                    createTextVNode(toDisplayString(__props.provincenews[1].title), 1)
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VHover, null, {
                                        default: withCtx(({ isHovering, props }) => [
                                          createVNode(VCard, {
                                            variant: "text",
                                            href: "/news/" + __props.provincenews[1].id
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VImg, mergeProps({
                                                cover: "",
                                                height: "516"
                                              }, props, {
                                                class: ["pa-4 align-end", isHovering ? "zoom" : ""],
                                                src: __props.provincenews[1].image,
                                                alt: __props.provincenews[1].media[0].file_name
                                              }), {
                                                default: withCtx(() => [
                                                  createVNode(VCard, { style: { "background-color": "rgba(\n                                                var(--v-theme-background),\n                                                0.8\n                                            )", "backdrop-filter": "blur(10px)" } }, {
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
                                                                  createTextVNode(toDisplayString(__props.provincenews[1].title), 1)
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VHover, null, {
                                      default: withCtx(({ isHovering, props }) => [
                                        createVNode(VCard, {
                                          variant: "text",
                                          class: "mb-3",
                                          href: "/news/" + __props.provincenews[0].id
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VImg, mergeProps({
                                              cover: "",
                                              height: "516"
                                            }, props, {
                                              class: ["pa-4 align-end", isHovering ? "zoom" : ""],
                                              src: __props.provincenews[0].image,
                                              alt: __props.provincenews[0].media[0].file_name
                                            }), {
                                              default: withCtx(() => [
                                                createVNode(VCard, { style: { "background-color": "rgba(\n                                                var(--v-theme-background),\n                                                0.8\n                                            )", "backdrop-filter": "blur(10px)" } }, {
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
                                                                createTextVNode(toDisplayString(__props.provincenews[0].title), 1)
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
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VHover, null, {
                                      default: withCtx(({ isHovering, props }) => [
                                        createVNode(VCard, {
                                          variant: "text",
                                          href: "/news/" + __props.provincenews[1].id
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VImg, mergeProps({
                                              cover: "",
                                              height: "516"
                                            }, props, {
                                              class: ["pa-4 align-end", isHovering ? "zoom" : ""],
                                              src: __props.provincenews[1].image,
                                              alt: __props.provincenews[1].media[0].file_name
                                            }), {
                                              default: withCtx(() => [
                                                createVNode(VCard, { style: { "background-color": "rgba(\n                                                var(--v-theme-background),\n                                                0.8\n                                            )", "backdrop-filter": "blur(10px)" } }, {
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
                                                                createTextVNode(toDisplayString(__props.provincenews[1].title), 1)
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VHover, null, {
                                    default: withCtx(({ isHovering, props }) => [
                                      createVNode(VCard, {
                                        variant: "text",
                                        class: "mb-3",
                                        href: "/news/" + __props.provincenews[0].id
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VImg, mergeProps({
                                            cover: "",
                                            height: "516"
                                          }, props, {
                                            class: ["pa-4 align-end", isHovering ? "zoom" : ""],
                                            src: __props.provincenews[0].image,
                                            alt: __props.provincenews[0].media[0].file_name
                                          }), {
                                            default: withCtx(() => [
                                              createVNode(VCard, { style: { "background-color": "rgba(\n                                                var(--v-theme-background),\n                                                0.8\n                                            )", "backdrop-filter": "blur(10px)" } }, {
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
                                                              createTextVNode(toDisplayString(__props.provincenews[0].title), 1)
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
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VHover, null, {
                                    default: withCtx(({ isHovering, props }) => [
                                      createVNode(VCard, {
                                        variant: "text",
                                        href: "/news/" + __props.provincenews[1].id
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VImg, mergeProps({
                                            cover: "",
                                            height: "516"
                                          }, props, {
                                            class: ["pa-4 align-end", isHovering ? "zoom" : ""],
                                            src: __props.provincenews[1].image,
                                            alt: __props.provincenews[1].media[0].file_name
                                          }), {
                                            default: withCtx(() => [
                                              createVNode(VCard, { style: { "background-color": "rgba(\n                                                var(--v-theme-background),\n                                                0.8\n                                            )", "backdrop-filter": "blur(10px)" } }, {
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
                                                              createTextVNode(toDisplayString(__props.provincenews[1].title), 1)
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "5"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VList, {
                          color: "primary",
                          class: "py-0 pl-0 bg-transparent"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(__props.provincenews, (item, index) => {
                                _push5(ssrRenderComponent(VHover, null, {
                                  default: withCtx(({ isHovering, props }, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      if (index > 1) {
                                        _push6(ssrRenderComponent(VListItem, mergeProps({
                                          href: "/news/" + item["id"]
                                        }, props, { class: "py-0 pl-0 mb-3" }), {
                                          prepend: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(VAvatar, {
                                                rounded: "lg",
                                                size: "auto"
                                              }, {
                                                default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(VImg, {
                                                      cover: "",
                                                      width: "150",
                                                      height: "120",
                                                      class: isHovering ? "zoom" : "",
                                                      src: item["image"]
                                                    }, null, _parent8, _scopeId7));
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
                                              }, _parent7, _scopeId6));
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
                                          default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(VListItemTitle, {
                                                class: "text-h5 text-wrap line-clamp-3 font-weight-bold",
                                                style: { "line-height": "2rem", "white-space": "wrap" }
                                              }, {
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
                                        }, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                    } else {
                                      return [
                                        index > 1 ? (openBlock(), createBlock(VListItem, mergeProps({
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
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.provincenews, (item, index) => {
                                  return openBlock(), createBlock(VHover, null, {
                                    default: withCtx(({ isHovering, props }) => [
                                      index > 1 ? (openBlock(), createBlock(VListItem, mergeProps({
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VList, {
                            color: "primary",
                            class: "py-0 pl-0 bg-transparent"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.provincenews, (item, index) => {
                                return openBlock(), createBlock(VHover, null, {
                                  default: withCtx(({ isHovering, props }) => [
                                    index > 1 ? (openBlock(), createBlock(VListItem, mergeProps({
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VRow, { align: "center" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "font-rajdhani text-h3 font-weight-bold" }, " प्रदेश समाचार ")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "8"
                            }, {
                              default: withCtx(() => [
                                createVNode(VChipGroup, { class: "justify-space-between" }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.provinces, (item) => {
                                      return openBlock(), createBlock(VChip, {
                                        class: "font-rajdhani font-weight-bold text-subtitle-1 mb-2",
                                        href: "/province/" + item["name"],
                                        style: { "max-width": "min-content !important" }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item["name"]), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["href"]);
                                    }), 256))
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
                      md: "7"
                    }, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VHover, null, {
                                  default: withCtx(({ isHovering, props }) => [
                                    createVNode(VCard, {
                                      variant: "text",
                                      class: "mb-3",
                                      href: "/news/" + __props.provincenews[0].id
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VImg, mergeProps({
                                          cover: "",
                                          height: "516"
                                        }, props, {
                                          class: ["pa-4 align-end", isHovering ? "zoom" : ""],
                                          src: __props.provincenews[0].image,
                                          alt: __props.provincenews[0].media[0].file_name
                                        }), {
                                          default: withCtx(() => [
                                            createVNode(VCard, { style: { "background-color": "rgba(\n                                                var(--v-theme-background),\n                                                0.8\n                                            )", "backdrop-filter": "blur(10px)" } }, {
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
                                                            createTextVNode(toDisplayString(__props.provincenews[0].title), 1)
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
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VHover, null, {
                                  default: withCtx(({ isHovering, props }) => [
                                    createVNode(VCard, {
                                      variant: "text",
                                      href: "/news/" + __props.provincenews[1].id
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VImg, mergeProps({
                                          cover: "",
                                          height: "516"
                                        }, props, {
                                          class: ["pa-4 align-end", isHovering ? "zoom" : ""],
                                          src: __props.provincenews[1].image,
                                          alt: __props.provincenews[1].media[0].file_name
                                        }), {
                                          default: withCtx(() => [
                                            createVNode(VCard, { style: { "background-color": "rgba(\n                                                var(--v-theme-background),\n                                                0.8\n                                            )", "backdrop-filter": "blur(10px)" } }, {
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
                                                            createTextVNode(toDisplayString(__props.provincenews[1].title), 1)
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
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.provincenews, (item, index) => {
                              return openBlock(), createBlock(VHover, null, {
                                default: withCtx(({ isHovering, props }) => [
                                  index > 1 ? (openBlock(), createBlock(VListItem, mergeProps({
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VRow, { align: "center" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "font-rajdhani text-h3 font-weight-bold" }, " प्रदेश समाचार ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "8"
                          }, {
                            default: withCtx(() => [
                              createVNode(VChipGroup, { class: "justify-space-between" }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.provinces, (item) => {
                                    return openBlock(), createBlock(VChip, {
                                      class: "font-rajdhani font-weight-bold text-subtitle-1 mb-2",
                                      href: "/province/" + item["name"],
                                      style: { "max-width": "min-content !important" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item["name"]), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["href"]);
                                  }), 256))
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
                    md: "7"
                  }, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VHover, null, {
                                default: withCtx(({ isHovering, props }) => [
                                  createVNode(VCard, {
                                    variant: "text",
                                    class: "mb-3",
                                    href: "/news/" + __props.provincenews[0].id
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VImg, mergeProps({
                                        cover: "",
                                        height: "516"
                                      }, props, {
                                        class: ["pa-4 align-end", isHovering ? "zoom" : ""],
                                        src: __props.provincenews[0].image,
                                        alt: __props.provincenews[0].media[0].file_name
                                      }), {
                                        default: withCtx(() => [
                                          createVNode(VCard, { style: { "background-color": "rgba(\n                                                var(--v-theme-background),\n                                                0.8\n                                            )", "backdrop-filter": "blur(10px)" } }, {
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
                                                          createTextVNode(toDisplayString(__props.provincenews[0].title), 1)
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
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VHover, null, {
                                default: withCtx(({ isHovering, props }) => [
                                  createVNode(VCard, {
                                    variant: "text",
                                    href: "/news/" + __props.provincenews[1].id
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VImg, mergeProps({
                                        cover: "",
                                        height: "516"
                                      }, props, {
                                        class: ["pa-4 align-end", isHovering ? "zoom" : ""],
                                        src: __props.provincenews[1].image,
                                        alt: __props.provincenews[1].media[0].file_name
                                      }), {
                                        default: withCtx(() => [
                                          createVNode(VCard, { style: { "background-color": "rgba(\n                                                var(--v-theme-background),\n                                                0.8\n                                            )", "backdrop-filter": "blur(10px)" } }, {
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
                                                          createTextVNode(toDisplayString(__props.provincenews[1].title), 1)
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
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.provincenews, (item, index) => {
                            return openBlock(), createBlock(VHover, null, {
                              default: withCtx(({ isHovering, props }) => [
                                index > 1 ? (openBlock(), createBlock(VListItem, mergeProps({
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/shared/home/provincenews.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
