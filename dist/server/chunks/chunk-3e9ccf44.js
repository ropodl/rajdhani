import { withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderAttr, ssrRenderStyle, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { VBtn } from "vuetify/lib/components/VBtn/index.mjs";
import { VForm } from "vuetify/lib/components/VForm/index.mjs";
import { VContainer, VRow, VCol } from "vuetify/lib/components/VGrid/index.mjs";
import { VList, VListItem, VListItemTitle, VListItemSubtitle } from "vuetify/lib/components/VList/index.mjs";
import { VTextField } from "vuetify/lib/components/VTextField/index.mjs";
import { VTextarea } from "vuetify/lib/components/VTextarea/index.mjs";
const _sfc_main = {
  __name: "contactus",
  __ssrInlineRender: true,
  props: {
    info: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><iframe${ssrRenderAttr("src", __props.info["map_iframe"])} width="100%" height="450" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy"></iframe>`);
      _push(ssrRenderComponent(VContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VList, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VListItem, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VListItemTitle, {
                                      class: "font-rajdhani text-h3",
                                      style: { "line-height": "3.5rem" }
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`ठेगाना`);
                                        } else {
                                          return [
                                            createTextVNode("ठेगाना")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VListItemSubtitle, {
                                      class: "text-h6",
                                      style: { "line-height": "2rem" }
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(__props.info["address"])}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(__props.info["address"]), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VListItemTitle, {
                                        class: "font-rajdhani text-h3",
                                        style: { "line-height": "3.5rem" }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("ठेगाना")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItemSubtitle, {
                                        class: "text-h6",
                                        style: { "line-height": "2rem" }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(__props.info["address"]), 1)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VListItem, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VListItemTitle, {
                                      class: "font-rajdhani text-h3",
                                      style: { "line-height": "3.5rem" }
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`सम्पर्क`);
                                        } else {
                                          return [
                                            createTextVNode("सम्पर्क")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VListItemSubtitle, {
                                      class: "text-h6",
                                      style: { "line-height": "2rem" }
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(__props.info["phone1"] + "," + __props.info["phone2"])}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(__props.info["phone1"] + "," + __props.info["phone2"]), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VListItemTitle, {
                                        class: "font-rajdhani text-h3",
                                        style: { "line-height": "3.5rem" }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("सम्पर्क")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItemSubtitle, {
                                        class: "text-h6",
                                        style: { "line-height": "2rem" }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(__props.info["phone1"] + "," + __props.info["phone2"]), 1)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VListItem, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VListItemTitle, {
                                      class: "font-rajdhani text-h3",
                                      style: { "line-height": "3.5rem" }
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`इमेल`);
                                        } else {
                                          return [
                                            createTextVNode("इमेल")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VListItemSubtitle, {
                                      class: "text-h6",
                                      style: { "line-height": "2rem" }
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(__props.info["email"])}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(__props.info["email"]), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VListItemTitle, {
                                        class: "font-rajdhani text-h3",
                                        style: { "line-height": "3.5rem" }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("इमेल")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItemSubtitle, {
                                        class: "text-h6",
                                        style: { "line-height": "2rem" }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(__props.info["email"]), 1)
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
                                createVNode(VListItem, null, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, {
                                      class: "font-rajdhani text-h3",
                                      style: { "line-height": "3.5rem" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("ठेगाना")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItemSubtitle, {
                                      class: "text-h6",
                                      style: { "line-height": "2rem" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(__props.info["address"]), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItem, null, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, {
                                      class: "font-rajdhani text-h3",
                                      style: { "line-height": "3.5rem" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("सम्पर्क")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItemSubtitle, {
                                      class: "text-h6",
                                      style: { "line-height": "2rem" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(__props.info["phone1"] + "," + __props.info["phone2"]), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItem, null, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, {
                                      class: "font-rajdhani text-h3",
                                      style: { "line-height": "3.5rem" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("इमेल")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItemSubtitle, {
                                      class: "text-h6",
                                      style: { "line-height": "2rem" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(__props.info["email"]), 1)
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
                          createVNode(VList, null, {
                            default: withCtx(() => [
                              createVNode(VListItem, null, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, {
                                    class: "font-rajdhani text-h3",
                                    style: { "line-height": "3.5rem" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("ठेगाना")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItemSubtitle, {
                                    class: "text-h6",
                                    style: { "line-height": "2rem" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(__props.info["address"]), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VListItem, null, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, {
                                    class: "font-rajdhani text-h3",
                                    style: { "line-height": "3.5rem" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("सम्पर्क")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItemSubtitle, {
                                    class: "text-h6",
                                    style: { "line-height": "2rem" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(__props.info["phone1"] + "," + __props.info["phone2"]), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VListItem, null, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, {
                                    class: "font-rajdhani text-h3",
                                    style: { "line-height": "3.5rem" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("इमेल")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItemSubtitle, {
                                    class: "text-h6",
                                    style: { "line-height": "2rem" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(__props.info["email"]), 1)
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
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VForm, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, { placeholder: "Full Name" }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextField, { placeholder: "Email Address" }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextField, { placeholder: "Subject" }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextarea, { placeholder: "Message" }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                flat: "",
                                block: "",
                                type: "submit",
                                height: "50",
                                color: "primary",
                                class: "text-capitalize"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Submit`);
                                  } else {
                                    return [
                                      createTextVNode("Submit")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, { placeholder: "Full Name" }),
                                createVNode(VTextField, { placeholder: "Email Address" }),
                                createVNode(VTextField, { placeholder: "Subject" }),
                                createVNode(VTextarea, { placeholder: "Message" }),
                                createVNode(VBtn, {
                                  flat: "",
                                  block: "",
                                  type: "submit",
                                  height: "50",
                                  color: "primary",
                                  class: "text-capitalize"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Submit")
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
                          createVNode(VForm, null, {
                            default: withCtx(() => [
                              createVNode(VTextField, { placeholder: "Full Name" }),
                              createVNode(VTextField, { placeholder: "Email Address" }),
                              createVNode(VTextField, { placeholder: "Subject" }),
                              createVNode(VTextarea, { placeholder: "Message" }),
                              createVNode(VBtn, {
                                flat: "",
                                block: "",
                                type: "submit",
                                height: "50",
                                color: "primary",
                                class: "text-capitalize"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Submit")
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
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VList, null, {
                          default: withCtx(() => [
                            createVNode(VListItem, null, {
                              default: withCtx(() => [
                                createVNode(VListItemTitle, {
                                  class: "font-rajdhani text-h3",
                                  style: { "line-height": "3.5rem" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("ठेगाना")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItemSubtitle, {
                                  class: "text-h6",
                                  style: { "line-height": "2rem" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(__props.info["address"]), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VListItem, null, {
                              default: withCtx(() => [
                                createVNode(VListItemTitle, {
                                  class: "font-rajdhani text-h3",
                                  style: { "line-height": "3.5rem" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("सम्पर्क")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItemSubtitle, {
                                  class: "text-h6",
                                  style: { "line-height": "2rem" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(__props.info["phone1"] + "," + __props.info["phone2"]), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VListItem, null, {
                              default: withCtx(() => [
                                createVNode(VListItemTitle, {
                                  class: "font-rajdhani text-h3",
                                  style: { "line-height": "3.5rem" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("इमेल")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItemSubtitle, {
                                  class: "text-h6",
                                  style: { "line-height": "2rem" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(__props.info["email"]), 1)
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
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VForm, null, {
                          default: withCtx(() => [
                            createVNode(VTextField, { placeholder: "Full Name" }),
                            createVNode(VTextField, { placeholder: "Email Address" }),
                            createVNode(VTextField, { placeholder: "Subject" }),
                            createVNode(VTextarea, { placeholder: "Message" }),
                            createVNode(VBtn, {
                              flat: "",
                              block: "",
                              type: "submit",
                              height: "50",
                              color: "primary",
                              class: "text-capitalize"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Submit")
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
          } else {
            return [
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VList, null, {
                        default: withCtx(() => [
                          createVNode(VListItem, null, {
                            default: withCtx(() => [
                              createVNode(VListItemTitle, {
                                class: "font-rajdhani text-h3",
                                style: { "line-height": "3.5rem" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("ठेगाना")
                                ]),
                                _: 1
                              }),
                              createVNode(VListItemSubtitle, {
                                class: "text-h6",
                                style: { "line-height": "2rem" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(__props.info["address"]), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VListItem, null, {
                            default: withCtx(() => [
                              createVNode(VListItemTitle, {
                                class: "font-rajdhani text-h3",
                                style: { "line-height": "3.5rem" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("सम्पर्क")
                                ]),
                                _: 1
                              }),
                              createVNode(VListItemSubtitle, {
                                class: "text-h6",
                                style: { "line-height": "2rem" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(__props.info["phone1"] + "," + __props.info["phone2"]), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VListItem, null, {
                            default: withCtx(() => [
                              createVNode(VListItemTitle, {
                                class: "font-rajdhani text-h3",
                                style: { "line-height": "3.5rem" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("इमेल")
                                ]),
                                _: 1
                              }),
                              createVNode(VListItemSubtitle, {
                                class: "text-h6",
                                style: { "line-height": "2rem" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(__props.info["email"]), 1)
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
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VForm, null, {
                        default: withCtx(() => [
                          createVNode(VTextField, { placeholder: "Full Name" }),
                          createVNode(VTextField, { placeholder: "Email Address" }),
                          createVNode(VTextField, { placeholder: "Subject" }),
                          createVNode(VTextarea, { placeholder: "Message" }),
                          createVNode(VBtn, {
                            flat: "",
                            block: "",
                            type: "submit",
                            height: "50",
                            color: "primary",
                            class: "text-capitalize"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Submit")
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
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/contactus.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
