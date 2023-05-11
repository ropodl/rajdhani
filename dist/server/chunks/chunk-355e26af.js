import { ref, onMounted, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, isRef, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { mdiHome, mdiChevronDown, mdiWeatherSunny, mdiWeatherNight, mdiMagnify, mdiClose } from "@mdi/js";
import { useTheme } from "vuetify";
import { _ as _export_sfc } from "./chunk-cc2b3d55.js";
import { VAppBar } from "vuetify/lib/components/VAppBar/index.mjs";
import { VBtn } from "vuetify/lib/components/VBtn/index.mjs";
import { VCard, VCardTitle, VCardText } from "vuetify/lib/components/VCard/index.mjs";
import { VDialog } from "vuetify/lib/components/VDialog/index.mjs";
import { VForm } from "vuetify/lib/components/VForm/index.mjs";
import { VContainer, VRow, VSpacer } from "vuetify/lib/components/VGrid/index.mjs";
import { VIcon } from "vuetify/lib/components/VIcon/index.mjs";
import { VList, VListItem, VListItemTitle } from "vuetify/lib/components/VList/index.mjs";
import { VMenu } from "vuetify/lib/components/VMenu/index.mjs";
import { VTextField } from "vuetify/lib/components/VTextField/index.mjs";
const navbar_vue_vue_type_style_index_0_scoped_3d4c648e_lang = "";
const navbar_vue_vue_type_style_index_1_lang = "";
const _sfc_main = {
  __name: "navbar",
  __ssrInlineRender: true,
  props: {
    provinces: Object,
    categories: Object,
    tags: Object
  },
  setup(__props) {
    const theme = useTheme();
    let dialog = ref(false);
    let isDarkMode = ref(false);
    onMounted(() => {
      isDarkMode.value = localStorage.getItem("isDarkMode") === "true";
      theme.global.name.value = isDarkMode.value ? "dark" : "light";
    });
    const switchThemeMode = () => {
      isDarkMode.value = localStorage.getItem("isDarkMode") !== "true";
      localStorage.setItem("isDarkMode", isDarkMode.value);
      theme.global.name.value = isDarkMode.value ? "dark" : "light";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VAppBar, mergeProps({
        color: "primary",
        height: "60",
        class: "overflow-visible position-relative"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          color: "white",
                          rounded: "0",
                          height: "60",
                          href: "/",
                          class: "hidden-md-only",
                          icon: unref(mdiHome)
                        }, null, _parent4, _scopeId3));
                        if (__props.categories.length > 0) {
                          _push4(`<div class="hidden-sm-and-down" data-v-3d4c648e${_scopeId3}><!--[-->`);
                          ssrRenderList(__props.categories.sort(
                            (a, b) => a.sort > b.sort ? 1 : -1
                          ), (item, i) => {
                            _push4(`<!--[-->`);
                            _push4(ssrRenderComponent(VBtn, {
                              height: "60",
                              size: "small",
                              class: "font-rajdhani text-h6 font-weight-bold rounded-0",
                              href: "/category/" + item["slug"]
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item["name"])}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item["name"]), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            if (i == 1) {
                              _push4(ssrRenderComponent(VMenu, {
                                stacked: "",
                                contained: "",
                                width: "150",
                                location: "top",
                                "location-strategy": "connected"
                              }, {
                                activator: withCtx(({ props }, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(VBtn, mergeProps({
                                      rounded: "0",
                                      color: "white",
                                      height: "60",
                                      size: "small"
                                    }, props, { class: "font-rajdhani font-weight-bold text-h6" }), {
                                      default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(` प्रदेश `);
                                          _push6(ssrRenderComponent(VIcon, {
                                            end: "",
                                            size: "x-small",
                                            icon: unref(mdiChevronDown)
                                          }, null, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createTextVNode(" प्रदेश "),
                                            createVNode(VIcon, {
                                              end: "",
                                              size: "x-small",
                                              icon: unref(mdiChevronDown)
                                            }, null, 8, ["icon"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(VBtn, mergeProps({
                                        rounded: "0",
                                        color: "white",
                                        height: "60",
                                        size: "small"
                                      }, props, { class: "font-rajdhani font-weight-bold text-h6" }), {
                                        default: withCtx(() => [
                                          createTextVNode(" प्रदेश "),
                                          createVNode(VIcon, {
                                            end: "",
                                            size: "x-small",
                                            icon: unref(mdiChevronDown)
                                          }, null, 8, ["icon"])
                                        ]),
                                        _: 2
                                      }, 1040)
                                    ];
                                  }
                                }),
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(VList, { class: "rounded-t-0" }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`<!--[-->`);
                                          ssrRenderList(__props.provinces, (item2) => {
                                            _push6(ssrRenderComponent(VListItem, {
                                              href: "/province/" + item2["name"]
                                            }, {
                                              default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                                if (_push7) {
                                                  _push7(ssrRenderComponent(VListItemTitle, null, {
                                                    default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                      if (_push8) {
                                                        _push8(`${ssrInterpolate(item2["name"])}`);
                                                      } else {
                                                        return [
                                                          createTextVNode(toDisplayString(item2["name"]), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent7, _scopeId6));
                                                } else {
                                                  return [
                                                    createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item2["name"]), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent6, _scopeId5));
                                          });
                                          _push6(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(true), createBlock(Fragment, null, renderList(__props.provinces, (item2) => {
                                              return openBlock(), createBlock(VListItem, {
                                                href: "/province/" + item2["name"]
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VListItemTitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item2["name"]), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1032, ["href"]);
                                            }), 256))
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(VList, { class: "rounded-t-0" }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(__props.provinces, (item2) => {
                                            return openBlock(), createBlock(VListItem, {
                                              href: "/province/" + item2["name"]
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item2["name"]), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1032, ["href"]);
                                          }), 256))
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`<!--]-->`);
                          });
                          _push4(`<!--]--></div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          rounded: "0",
                          height: "60",
                          class: "font-weight-bold text-subtitle-1",
                          onClick: switchThemeMode,
                          icon: unref(isDarkMode) ? unref(mdiWeatherSunny) : unref(mdiWeatherNight)
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDialog, {
                          modelValue: unref(dialog),
                          "onUpdate:modelValue": ($event) => isRef(dialog) ? dialog.value = $event : dialog = $event,
                          scrim: "black",
                          "max-width": "650"
                        }, {
                          activator: withCtx(({ props }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, mergeProps({
                                color: "white",
                                rounded: "0",
                                height: "60",
                                class: "font-weight-bold text-h6"
                              }, props), {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, { icon: unref(mdiMagnify) }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, { icon: unref(mdiMagnify) }, null, 8, ["icon"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, mergeProps({
                                  color: "white",
                                  rounded: "0",
                                  height: "60",
                                  class: "font-weight-bold text-h6"
                                }, props), {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { icon: unref(mdiMagnify) }, null, 8, ["icon"])
                                  ]),
                                  _: 2
                                }, 1040)
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCard, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCardTitle, { class: "d-flex" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Search for news and articles `);
                                          _push7(ssrRenderComponent(VSpacer, null, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VBtn, {
                                            size: "x-small",
                                            color: "primary",
                                            variant: "tonal",
                                            icon: unref(mdiClose),
                                            onClick: ($event) => isRef(dialog) ? dialog.value = false : dialog = false,
                                            "location-strategy": "static"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createTextVNode(" Search for news and articles "),
                                            createVNode(VSpacer),
                                            createVNode(VBtn, {
                                              size: "x-small",
                                              color: "primary",
                                              variant: "tonal",
                                              icon: unref(mdiClose),
                                              onClick: ($event) => isRef(dialog) ? dialog.value = false : dialog = false,
                                              "location-strategy": "static"
                                            }, null, 8, ["icon", "onClick"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VForm, {
                                      action: "/search",
                                      method: "get"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCardText, { class: "py-0" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  variant: "outlined",
                                                  name: "search",
                                                  placeholder: "Type here to search"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    variant: "outlined",
                                                    name: "search",
                                                    placeholder: "Type here to search"
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCardTitle, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Recommended Tags`);
                                              } else {
                                                return [
                                                  createTextVNode("Recommended Tags")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCardText, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<!--[-->`);
                                                ssrRenderList(__props.tags, (tag) => {
                                                  _push8(ssrRenderComponent(VBtn, {
                                                    variant: "text",
                                                    href: "/search?tag=" + tag["name"]
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`#${ssrInterpolate(tag["name"])}`);
                                                      } else {
                                                        return [
                                                          createTextVNode("#" + toDisplayString(tag["name"]), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                });
                                                _push8(`<!--]-->`);
                                              } else {
                                                return [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.tags, (tag) => {
                                                    return openBlock(), createBlock(VBtn, {
                                                      variant: "text",
                                                      href: "/search?tag=" + tag["name"]
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("#" + toDisplayString(tag["name"]), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["href"]);
                                                  }), 256))
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VBtn, {
                                            block: "",
                                            type: "submit",
                                            height: "50",
                                            rounded: "0",
                                            color: "primary",
                                            class: "text-capitalize",
                                            onClick: ($event) => isRef(dialog) ? dialog.value = false : dialog = false
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Search `);
                                              } else {
                                                return [
                                                  createTextVNode(" Search ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCardText, { class: "py-0" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  variant: "outlined",
                                                  name: "search",
                                                  placeholder: "Type here to search"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCardTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Recommended Tags")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCardText, null, {
                                              default: withCtx(() => [
                                                (openBlock(true), createBlock(Fragment, null, renderList(__props.tags, (tag) => {
                                                  return openBlock(), createBlock(VBtn, {
                                                    variant: "text",
                                                    href: "/search?tag=" + tag["name"]
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("#" + toDisplayString(tag["name"]), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["href"]);
                                                }), 256))
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VBtn, {
                                              block: "",
                                              type: "submit",
                                              height: "50",
                                              rounded: "0",
                                              color: "primary",
                                              class: "text-capitalize",
                                              onClick: ($event) => isRef(dialog) ? dialog.value = false : dialog = false
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Search ")
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCardTitle, { class: "d-flex" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Search for news and articles "),
                                          createVNode(VSpacer),
                                          createVNode(VBtn, {
                                            size: "x-small",
                                            color: "primary",
                                            variant: "tonal",
                                            icon: unref(mdiClose),
                                            onClick: ($event) => isRef(dialog) ? dialog.value = false : dialog = false,
                                            "location-strategy": "static"
                                          }, null, 8, ["icon", "onClick"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VForm, {
                                        action: "/search",
                                        method: "get"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCardText, { class: "py-0" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                variant: "outlined",
                                                name: "search",
                                                placeholder: "Type here to search"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCardTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Recommended Tags")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCardText, null, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(__props.tags, (tag) => {
                                                return openBlock(), createBlock(VBtn, {
                                                  variant: "text",
                                                  href: "/search?tag=" + tag["name"]
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("#" + toDisplayString(tag["name"]), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["href"]);
                                              }), 256))
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VBtn, {
                                            block: "",
                                            type: "submit",
                                            height: "50",
                                            rounded: "0",
                                            color: "primary",
                                            class: "text-capitalize",
                                            onClick: ($event) => isRef(dialog) ? dialog.value = false : dialog = false
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Search ")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
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
                                createVNode(VCard, null, {
                                  default: withCtx(() => [
                                    createVNode(VCardTitle, { class: "d-flex" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Search for news and articles "),
                                        createVNode(VSpacer),
                                        createVNode(VBtn, {
                                          size: "x-small",
                                          color: "primary",
                                          variant: "tonal",
                                          icon: unref(mdiClose),
                                          onClick: ($event) => isRef(dialog) ? dialog.value = false : dialog = false,
                                          "location-strategy": "static"
                                        }, null, 8, ["icon", "onClick"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VForm, {
                                      action: "/search",
                                      method: "get"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCardText, { class: "py-0" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              variant: "outlined",
                                              name: "search",
                                              placeholder: "Type here to search"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCardTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Recommended Tags")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCardText, null, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(__props.tags, (tag) => {
                                              return openBlock(), createBlock(VBtn, {
                                                variant: "text",
                                                href: "/search?tag=" + tag["name"]
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("#" + toDisplayString(tag["name"]), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["href"]);
                                            }), 256))
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VBtn, {
                                          block: "",
                                          type: "submit",
                                          height: "50",
                                          rounded: "0",
                                          color: "primary",
                                          class: "text-capitalize",
                                          onClick: ($event) => isRef(dialog) ? dialog.value = false : dialog = false
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Search ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
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
                          createVNode(VBtn, {
                            color: "white",
                            rounded: "0",
                            height: "60",
                            href: "/",
                            class: "hidden-md-only",
                            icon: unref(mdiHome)
                          }, null, 8, ["icon"]),
                          __props.categories.length > 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "hidden-sm-and-down"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.categories.sort(
                              (a, b) => a.sort > b.sort ? 1 : -1
                            ), (item, i) => {
                              return openBlock(), createBlock(Fragment, null, [
                                createVNode(VBtn, {
                                  height: "60",
                                  size: "small",
                                  class: "font-rajdhani text-h6 font-weight-bold rounded-0",
                                  href: "/category/" + item["slug"]
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item["name"]), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["href"]),
                                i == 1 ? (openBlock(), createBlock(VMenu, {
                                  key: 0,
                                  stacked: "",
                                  contained: "",
                                  width: "150",
                                  location: "top",
                                  "location-strategy": "connected"
                                }, {
                                  activator: withCtx(({ props }) => [
                                    createVNode(VBtn, mergeProps({
                                      rounded: "0",
                                      color: "white",
                                      height: "60",
                                      size: "small"
                                    }, props, { class: "font-rajdhani font-weight-bold text-h6" }), {
                                      default: withCtx(() => [
                                        createTextVNode(" प्रदेश "),
                                        createVNode(VIcon, {
                                          end: "",
                                          size: "x-small",
                                          icon: unref(mdiChevronDown)
                                        }, null, 8, ["icon"])
                                      ]),
                                      _: 2
                                    }, 1040)
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VList, { class: "rounded-t-0" }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.provinces, (item2) => {
                                          return openBlock(), createBlock(VListItem, {
                                            href: "/province/" + item2["name"]
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item2["name"]), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1032, ["href"]);
                                        }), 256))
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ], 64);
                            }), 256))
                          ])) : createCommentVNode("", true),
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            rounded: "0",
                            height: "60",
                            class: "font-weight-bold text-subtitle-1",
                            onClick: switchThemeMode,
                            icon: unref(isDarkMode) ? unref(mdiWeatherSunny) : unref(mdiWeatherNight)
                          }, null, 8, ["icon"]),
                          createVNode(VDialog, {
                            modelValue: unref(dialog),
                            "onUpdate:modelValue": ($event) => isRef(dialog) ? dialog.value = $event : dialog = $event,
                            scrim: "black",
                            "max-width": "650"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(VBtn, mergeProps({
                                color: "white",
                                rounded: "0",
                                height: "60",
                                class: "font-weight-bold text-h6"
                              }, props), {
                                default: withCtx(() => [
                                  createVNode(VIcon, { icon: unref(mdiMagnify) }, null, 8, ["icon"])
                                ]),
                                _: 2
                              }, 1040)
                            ]),
                            default: withCtx(() => [
                              createVNode(VCard, null, {
                                default: withCtx(() => [
                                  createVNode(VCardTitle, { class: "d-flex" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Search for news and articles "),
                                      createVNode(VSpacer),
                                      createVNode(VBtn, {
                                        size: "x-small",
                                        color: "primary",
                                        variant: "tonal",
                                        icon: unref(mdiClose),
                                        onClick: ($event) => isRef(dialog) ? dialog.value = false : dialog = false,
                                        "location-strategy": "static"
                                      }, null, 8, ["icon", "onClick"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VForm, {
                                    action: "/search",
                                    method: "get"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCardText, { class: "py-0" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            variant: "outlined",
                                            name: "search",
                                            placeholder: "Type here to search"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCardTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Recommended Tags")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCardText, null, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(__props.tags, (tag) => {
                                            return openBlock(), createBlock(VBtn, {
                                              variant: "text",
                                              href: "/search?tag=" + tag["name"]
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("#" + toDisplayString(tag["name"]), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["href"]);
                                          }), 256))
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        block: "",
                                        type: "submit",
                                        height: "50",
                                        rounded: "0",
                                        color: "primary",
                                        class: "text-capitalize",
                                        onClick: ($event) => isRef(dialog) ? dialog.value = false : dialog = false
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Search ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          color: "white",
                          rounded: "0",
                          height: "60",
                          href: "/",
                          class: "hidden-md-only",
                          icon: unref(mdiHome)
                        }, null, 8, ["icon"]),
                        __props.categories.length > 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "hidden-sm-and-down"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.categories.sort(
                            (a, b) => a.sort > b.sort ? 1 : -1
                          ), (item, i) => {
                            return openBlock(), createBlock(Fragment, null, [
                              createVNode(VBtn, {
                                height: "60",
                                size: "small",
                                class: "font-rajdhani text-h6 font-weight-bold rounded-0",
                                href: "/category/" + item["slug"]
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item["name"]), 1)
                                ]),
                                _: 2
                              }, 1032, ["href"]),
                              i == 1 ? (openBlock(), createBlock(VMenu, {
                                key: 0,
                                stacked: "",
                                contained: "",
                                width: "150",
                                location: "top",
                                "location-strategy": "connected"
                              }, {
                                activator: withCtx(({ props }) => [
                                  createVNode(VBtn, mergeProps({
                                    rounded: "0",
                                    color: "white",
                                    height: "60",
                                    size: "small"
                                  }, props, { class: "font-rajdhani font-weight-bold text-h6" }), {
                                    default: withCtx(() => [
                                      createTextVNode(" प्रदेश "),
                                      createVNode(VIcon, {
                                        end: "",
                                        size: "x-small",
                                        icon: unref(mdiChevronDown)
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 2
                                  }, 1040)
                                ]),
                                default: withCtx(() => [
                                  createVNode(VList, { class: "rounded-t-0" }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.provinces, (item2) => {
                                        return openBlock(), createBlock(VListItem, {
                                          href: "/province/" + item2["name"]
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item2["name"]), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["href"]);
                                      }), 256))
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true)
                            ], 64);
                          }), 256))
                        ])) : createCommentVNode("", true),
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          rounded: "0",
                          height: "60",
                          class: "font-weight-bold text-subtitle-1",
                          onClick: switchThemeMode,
                          icon: unref(isDarkMode) ? unref(mdiWeatherSunny) : unref(mdiWeatherNight)
                        }, null, 8, ["icon"]),
                        createVNode(VDialog, {
                          modelValue: unref(dialog),
                          "onUpdate:modelValue": ($event) => isRef(dialog) ? dialog.value = $event : dialog = $event,
                          scrim: "black",
                          "max-width": "650"
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(VBtn, mergeProps({
                              color: "white",
                              rounded: "0",
                              height: "60",
                              class: "font-weight-bold text-h6"
                            }, props), {
                              default: withCtx(() => [
                                createVNode(VIcon, { icon: unref(mdiMagnify) }, null, 8, ["icon"])
                              ]),
                              _: 2
                            }, 1040)
                          ]),
                          default: withCtx(() => [
                            createVNode(VCard, null, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, { class: "d-flex" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Search for news and articles "),
                                    createVNode(VSpacer),
                                    createVNode(VBtn, {
                                      size: "x-small",
                                      color: "primary",
                                      variant: "tonal",
                                      icon: unref(mdiClose),
                                      onClick: ($event) => isRef(dialog) ? dialog.value = false : dialog = false,
                                      "location-strategy": "static"
                                    }, null, 8, ["icon", "onClick"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VForm, {
                                  action: "/search",
                                  method: "get"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCardText, { class: "py-0" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          variant: "outlined",
                                          name: "search",
                                          placeholder: "Type here to search"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCardTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Recommended Tags")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCardText, null, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.tags, (tag) => {
                                          return openBlock(), createBlock(VBtn, {
                                            variant: "text",
                                            href: "/search?tag=" + tag["name"]
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("#" + toDisplayString(tag["name"]), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["href"]);
                                        }), 256))
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, {
                                      block: "",
                                      type: "submit",
                                      height: "50",
                                      rounded: "0",
                                      color: "primary",
                                      class: "text-capitalize",
                                      onClick: ($event) => isRef(dialog) ? dialog.value = false : dialog = false
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Search ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
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
              createVNode(VContainer, null, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        color: "white",
                        rounded: "0",
                        height: "60",
                        href: "/",
                        class: "hidden-md-only",
                        icon: unref(mdiHome)
                      }, null, 8, ["icon"]),
                      __props.categories.length > 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "hidden-sm-and-down"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.categories.sort(
                          (a, b) => a.sort > b.sort ? 1 : -1
                        ), (item, i) => {
                          return openBlock(), createBlock(Fragment, null, [
                            createVNode(VBtn, {
                              height: "60",
                              size: "small",
                              class: "font-rajdhani text-h6 font-weight-bold rounded-0",
                              href: "/category/" + item["slug"]
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item["name"]), 1)
                              ]),
                              _: 2
                            }, 1032, ["href"]),
                            i == 1 ? (openBlock(), createBlock(VMenu, {
                              key: 0,
                              stacked: "",
                              contained: "",
                              width: "150",
                              location: "top",
                              "location-strategy": "connected"
                            }, {
                              activator: withCtx(({ props }) => [
                                createVNode(VBtn, mergeProps({
                                  rounded: "0",
                                  color: "white",
                                  height: "60",
                                  size: "small"
                                }, props, { class: "font-rajdhani font-weight-bold text-h6" }), {
                                  default: withCtx(() => [
                                    createTextVNode(" प्रदेश "),
                                    createVNode(VIcon, {
                                      end: "",
                                      size: "x-small",
                                      icon: unref(mdiChevronDown)
                                    }, null, 8, ["icon"])
                                  ]),
                                  _: 2
                                }, 1040)
                              ]),
                              default: withCtx(() => [
                                createVNode(VList, { class: "rounded-t-0" }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.provinces, (item2) => {
                                      return openBlock(), createBlock(VListItem, {
                                        href: "/province/" + item2["name"]
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item2["name"]), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1032, ["href"]);
                                    }), 256))
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true)
                          ], 64);
                        }), 256))
                      ])) : createCommentVNode("", true),
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        rounded: "0",
                        height: "60",
                        class: "font-weight-bold text-subtitle-1",
                        onClick: switchThemeMode,
                        icon: unref(isDarkMode) ? unref(mdiWeatherSunny) : unref(mdiWeatherNight)
                      }, null, 8, ["icon"]),
                      createVNode(VDialog, {
                        modelValue: unref(dialog),
                        "onUpdate:modelValue": ($event) => isRef(dialog) ? dialog.value = $event : dialog = $event,
                        scrim: "black",
                        "max-width": "650"
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode(VBtn, mergeProps({
                            color: "white",
                            rounded: "0",
                            height: "60",
                            class: "font-weight-bold text-h6"
                          }, props), {
                            default: withCtx(() => [
                              createVNode(VIcon, { icon: unref(mdiMagnify) }, null, 8, ["icon"])
                            ]),
                            _: 2
                          }, 1040)
                        ]),
                        default: withCtx(() => [
                          createVNode(VCard, null, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, { class: "d-flex" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Search for news and articles "),
                                  createVNode(VSpacer),
                                  createVNode(VBtn, {
                                    size: "x-small",
                                    color: "primary",
                                    variant: "tonal",
                                    icon: unref(mdiClose),
                                    onClick: ($event) => isRef(dialog) ? dialog.value = false : dialog = false,
                                    "location-strategy": "static"
                                  }, null, 8, ["icon", "onClick"])
                                ]),
                                _: 1
                              }),
                              createVNode(VForm, {
                                action: "/search",
                                method: "get"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCardText, { class: "py-0" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        variant: "outlined",
                                        name: "search",
                                        placeholder: "Type here to search"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Recommended Tags")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardText, null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.tags, (tag) => {
                                        return openBlock(), createBlock(VBtn, {
                                          variant: "text",
                                          href: "/search?tag=" + tag["name"]
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("#" + toDisplayString(tag["name"]), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["href"]);
                                      }), 256))
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    block: "",
                                    type: "submit",
                                    height: "50",
                                    rounded: "0",
                                    color: "primary",
                                    class: "text-capitalize",
                                    onClick: ($event) => isRef(dialog) ? dialog.value = false : dialog = false
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Search ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
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
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/layout/navbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const navbar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3d4c648e"]]);
export {
  navbar as default
};
