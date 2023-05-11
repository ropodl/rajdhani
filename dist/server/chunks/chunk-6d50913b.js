import { defineAsyncComponent, unref, withCtx, createVNode, createTextVNode, toDisplayString, mergeProps, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { VBtn } from "vuetify/lib/components/VBtn/index.mjs";
import { VCard, VCardTitle } from "vuetify/lib/components/VCard/index.mjs";
import { VContainer, VRow, VCol, VSpacer } from "vuetify/lib/components/VGrid/index.mjs";
import { VHover } from "vuetify/lib/components/VHover/index.mjs";
import { VImg } from "vuetify/lib/components/VImg/index.mjs";
import { VLazy } from "vuetify/lib/components/VLazy/index.mjs";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    mainnews: Object,
    latest: Object,
    provincenews: Object,
    provinces: Object,
    photos: Object,
    videos: Object,
    trending: Object,
    catnews: Object,
    advertisements: Object
  },
  setup(__props) {
    const mainNews = defineAsyncComponent(
      () => import("./chunk-0c68792b.js")
    );
    const latestNews = defineAsyncComponent(
      () => import("./chunk-7cb32625.js")
    );
    const provinceNews = defineAsyncComponent(
      () => import("./chunk-75720df5.js")
    );
    const photoFeature = defineAsyncComponent(
      () => import("./chunk-e6fad897.js")
    );
    const videoFeature = defineAsyncComponent(
      () => import("./chunk-6bbe4692.js")
    );
    const tabNews = defineAsyncComponent(
      () => import("./chunk-de5cb431.js")
    );
    const overlayFull = defineAsyncComponent(
      () => import("./chunk-26ff10e4.js")
    );
    const twoFive = defineAsyncComponent(
      () => import("./chunk-b18fa110.js")
    );
    const threeCol = defineAsyncComponent(
      () => import("./chunk-8a1d8e72.js")
    );
    const twoFour = defineAsyncComponent(
      () => import("./chunk-84d212de.js")
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (__props.mainnews.length > 0) {
        _push(ssrRenderComponent(unref(mainNews), { mainnews: __props.mainnews }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(VContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "9"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VLazy, {
                          options: { threshold: 0.5 },
                          transition: "fade-transition"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(latestNews), { latest: __props.latest }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(latestNews), { latest: __props.latest }, null, 8, ["latest"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VLazy, {
                            options: { threshold: 0.5 },
                            transition: "fade-transition"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(latestNews), { latest: __props.latest }, null, 8, ["latest"])
                            ]),
                            _: 1
                          }, 8, ["options"])
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
                        _push4(`<div class="d-flex flex-wrap justify-space-between"${_scopeId3}>`);
                        _push4(ssrRenderComponent(VCard, {
                          class: "mb-3 w-100 h-100",
                          href: __props.advertisements.sm_ad[0].advertisement.url,
                          target: "_blank",
                          height: "290",
                          "max-width": "290"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VImg, {
                                class: "w-100 h-100",
                                src: __props.advertisements.sm_ad[0].advertisement.image,
                                alt: __props.advertisements.sm_ad[0].advertisement.title
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VImg, {
                                  class: "w-100 h-100",
                                  src: __props.advertisements.sm_ad[0].advertisement.image,
                                  alt: __props.advertisements.sm_ad[0].advertisement.title
                                }, null, 8, ["src", "alt"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCard, {
                          class: "mb-3 w-100 h-100",
                          href: __props.advertisements.sm_ad[1].advertisement.url,
                          target: "_blank",
                          "max-height": "290",
                          "max-width": "290"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VImg, {
                                src: __props.advertisements.sm_ad[1].advertisement.image,
                                alt: __props.advertisements.sm_ad[1].advertisement.title
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VImg, {
                                  src: __props.advertisements.sm_ad[1].advertisement.image,
                                  alt: __props.advertisements.sm_ad[1].advertisement.title
                                }, null, 8, ["src", "alt"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex flex-wrap justify-space-between" }, [
                            createVNode(VCard, {
                              class: "mb-3 w-100 h-100",
                              href: __props.advertisements.sm_ad[0].advertisement.url,
                              target: "_blank",
                              height: "290",
                              "max-width": "290"
                            }, {
                              default: withCtx(() => [
                                createVNode(VImg, {
                                  class: "w-100 h-100",
                                  src: __props.advertisements.sm_ad[0].advertisement.image,
                                  alt: __props.advertisements.sm_ad[0].advertisement.title
                                }, null, 8, ["src", "alt"])
                              ]),
                              _: 1
                            }, 8, ["href"]),
                            createVNode(VCard, {
                              class: "mb-3 w-100 h-100",
                              href: __props.advertisements.sm_ad[1].advertisement.url,
                              target: "_blank",
                              "max-height": "290",
                              "max-width": "290"
                            }, {
                              default: withCtx(() => [
                                createVNode(VImg, {
                                  src: __props.advertisements.sm_ad[1].advertisement.image,
                                  alt: __props.advertisements.sm_ad[1].advertisement.title
                                }, null, 8, ["src", "alt"])
                              ]),
                              _: 1
                            }, 8, ["href"])
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
                      md: "9"
                    }, {
                      default: withCtx(() => [
                        createVNode(VLazy, {
                          options: { threshold: 0.5 },
                          transition: "fade-transition"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(latestNews), { latest: __props.latest }, null, 8, ["latest"])
                          ]),
                          _: 1
                        }, 8, ["options"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "3"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex flex-wrap justify-space-between" }, [
                          createVNode(VCard, {
                            class: "mb-3 w-100 h-100",
                            href: __props.advertisements.sm_ad[0].advertisement.url,
                            target: "_blank",
                            height: "290",
                            "max-width": "290"
                          }, {
                            default: withCtx(() => [
                              createVNode(VImg, {
                                class: "w-100 h-100",
                                src: __props.advertisements.sm_ad[0].advertisement.image,
                                alt: __props.advertisements.sm_ad[0].advertisement.title
                              }, null, 8, ["src", "alt"])
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          createVNode(VCard, {
                            class: "mb-3 w-100 h-100",
                            href: __props.advertisements.sm_ad[1].advertisement.url,
                            target: "_blank",
                            "max-height": "290",
                            "max-width": "290"
                          }, {
                            default: withCtx(() => [
                              createVNode(VImg, {
                                src: __props.advertisements.sm_ad[1].advertisement.image,
                                alt: __props.advertisements.sm_ad[1].advertisement.title
                              }, null, 8, ["src", "alt"])
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "9"
                  }, {
                    default: withCtx(() => [
                      createVNode(VLazy, {
                        options: { threshold: 0.5 },
                        transition: "fade-transition"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(latestNews), { latest: __props.latest }, null, 8, ["latest"])
                        ]),
                        _: 1
                      }, 8, ["options"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "3"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex flex-wrap justify-space-between" }, [
                        createVNode(VCard, {
                          class: "mb-3 w-100 h-100",
                          href: __props.advertisements.sm_ad[0].advertisement.url,
                          target: "_blank",
                          height: "290",
                          "max-width": "290"
                        }, {
                          default: withCtx(() => [
                            createVNode(VImg, {
                              class: "w-100 h-100",
                              src: __props.advertisements.sm_ad[0].advertisement.image,
                              alt: __props.advertisements.sm_ad[0].advertisement.title
                            }, null, 8, ["src", "alt"])
                          ]),
                          _: 1
                        }, 8, ["href"]),
                        createVNode(VCard, {
                          class: "mb-3 w-100 h-100",
                          href: __props.advertisements.sm_ad[1].advertisement.url,
                          target: "_blank",
                          "max-height": "290",
                          "max-width": "290"
                        }, {
                          default: withCtx(() => [
                            createVNode(VImg, {
                              src: __props.advertisements.sm_ad[1].advertisement.image,
                              alt: __props.advertisements.sm_ad[1].advertisement.title
                            }, null, 8, ["src", "alt"])
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
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(__props.catnews.sort(
        (a, b) => a.sort > b.sort ? 1 : -1
      ), (item, index) => {
        _push(`<!--[-->`);
        if (item["name"] == "राजनीति" && item["news"].length > 0) {
          _push(ssrRenderComponent(VContainer, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(VLazy, {
                  options: { threshold: 0.5 },
                  transition: "fade-transition"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(overlayFull), { data: item }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(unref(overlayFull), { data: item }, null, 8, ["data"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(VLazy, {
                    options: { threshold: 0.5 },
                    transition: "fade-transition"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(overlayFull), { data: item }, null, 8, ["data"])
                    ]),
                    _: 2
                  }, 1032, ["options"])
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (item["name"] == "समाज" && item["news"].length > 0) {
          _push(ssrRenderComponent(VContainer, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(VRow, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(VCol, {
                        cols: "12",
                        md: "9"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VLazy, {
                              options: { threshold: 0.5 },
                              transition: "fade-transition"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(twoFive), { data: item }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(twoFive), { data: item }, null, 8, ["data"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VLazy, {
                                options: { threshold: 0.5 },
                                transition: "fade-transition"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(twoFive), { data: item }, null, 8, ["data"])
                                ]),
                                _: 2
                              }, 1032, ["options"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(VCol, {
                        cols: "12",
                        md: "3"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VLazy, {
                              options: { threshold: 0.5 },
                              transition: "fade-transition"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(tabNews), {
                                    latest: __props.latest,
                                    trending: __props.trending
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(tabNews), {
                                      latest: __props.latest,
                                      trending: __props.trending
                                    }, null, 8, ["latest", "trending"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VLazy, {
                                options: { threshold: 0.5 },
                                transition: "fade-transition"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(tabNews), {
                                    latest: __props.latest,
                                    trending: __props.trending
                                  }, null, 8, ["latest", "trending"])
                                ]),
                                _: 1
                              }, 8, ["options"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(VCol, {
                          cols: "12",
                          md: "9"
                        }, {
                          default: withCtx(() => [
                            createVNode(VLazy, {
                              options: { threshold: 0.5 },
                              transition: "fade-transition"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(twoFive), { data: item }, null, 8, ["data"])
                              ]),
                              _: 2
                            }, 1032, ["options"])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(VCol, {
                          cols: "12",
                          md: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode(VLazy, {
                              options: { threshold: 0.5 },
                              transition: "fade-transition"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(tabNews), {
                                  latest: __props.latest,
                                  trending: __props.trending
                                }, null, 8, ["latest", "trending"])
                              ]),
                              _: 1
                            }, 8, ["options"])
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "9"
                      }, {
                        default: withCtx(() => [
                          createVNode(VLazy, {
                            options: { threshold: 0.5 },
                            transition: "fade-transition"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(twoFive), { data: item }, null, 8, ["data"])
                            ]),
                            _: 2
                          }, 1032, ["options"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(VCol, {
                        cols: "12",
                        md: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(VLazy, {
                            options: { threshold: 0.5 },
                            transition: "fade-transition"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(tabNews), {
                                latest: __props.latest,
                                trending: __props.trending
                              }, null, 8, ["latest", "trending"])
                            ]),
                            _: 1
                          }, 8, ["options"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (item["name"] == "खेलकुद़़" && item["news"].length > 0) {
          _push(ssrRenderComponent(VContainer, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(VLazy, {
                  options: { threshold: 0.5 },
                  transition: "fade-transition"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(overlayFull), { data: item }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(unref(overlayFull), { data: item }, null, 8, ["data"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(VLazy, {
                    options: { threshold: 0.5 },
                    transition: "fade-transition"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(overlayFull), { data: item }, null, 8, ["data"])
                    ]),
                    _: 2
                  }, 1032, ["options"])
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (item["name"] == "अर्थ" && item["news"].length > 0) {
          _push(ssrRenderComponent(VContainer, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(VLazy, {
                  options: { threshold: 0.5 },
                  transition: "fade-transition"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(overlayFull), { data: item }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(unref(overlayFull), { data: item }, null, 8, ["data"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(VLazy, {
                    options: { threshold: 0.5 },
                    transition: "fade-transition"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(overlayFull), { data: item }, null, 8, ["data"])
                    ]),
                    _: 2
                  }, 1032, ["options"])
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (item["name"] == "साहित्य" && item["news"].length > 0) {
          _push(ssrRenderComponent(VContainer, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(VLazy, {
                  options: { threshold: 0.5 },
                  transition: "fade-transition"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(threeCol), { data: item }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(unref(threeCol), { data: item }, null, 8, ["data"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(VLazy, {
                    options: { threshold: 0.5 },
                    transition: "fade-transition"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(threeCol), { data: item }, null, 8, ["data"])
                    ]),
                    _: 2
                  }, 1032, ["options"])
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (item["name"] == "अन्तर्राष्ट्रिय" && item["news"].length > 0) {
          _push(ssrRenderComponent(VContainer, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(VLazy, {
                  options: { threshold: 0.5 },
                  transition: "fade-transition"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(threeCol), { data: item }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(unref(threeCol), { data: item }, null, 8, ["data"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(VLazy, {
                    options: { threshold: 0.5 },
                    transition: "fade-transition"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(threeCol), { data: item }, null, 8, ["data"])
                    ]),
                    _: 2
                  }, 1032, ["options"])
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (item["name"] == "मनोरञ्जन" && item["news"].length > 0) {
          _push(ssrRenderComponent(VContainer, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(VLazy, {
                  options: { threshold: 0.5 },
                  transition: "fade-transition"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(twoFour), { data: item }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(unref(twoFour), { data: item }, null, 8, ["data"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(VLazy, {
                    options: { threshold: 0.5 },
                    transition: "fade-transition"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(twoFour), { data: item }, null, 8, ["data"])
                    ]),
                    _: 2
                  }, 1032, ["options"])
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (item["name"] == "विचार" && item["news"].length > 0) {
          _push(ssrRenderComponent(VContainer, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(VLazy, {
                  options: { threshold: 0.5 },
                  transition: "fade-transition"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(twoFour), { data: item }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(unref(twoFour), { data: item }, null, 8, ["data"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(VLazy, {
                    options: { threshold: 0.5 },
                    transition: "fade-transition"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(twoFour), { data: item }, null, 8, ["data"])
                    ]),
                    _: 2
                  }, 1032, ["options"])
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (item["name"] == "शिक्षा" && item["news"].length > 0) {
          _push(ssrRenderComponent(VContainer, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(VLazy, {
                  options: { threshold: 0.5 },
                  transition: "fade-transition"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(VRow, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VCol, { cols: "12" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="d-flex align-center flex-wrap"${_scopeId4}><span class="text-h3 font-rajdhani font-weight-bold"${_scopeId4}>${ssrInterpolate(item["name"])}</span>`);
                                  _push5(ssrRenderComponent(VSpacer, null, null, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(VBtn, {
                                    rounded: "",
                                    color: "primary",
                                    variant: "tonal",
                                    href: "/category/" + item["slug"]
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(` थप ${ssrInterpolate(item["name"])} समाचार `);
                                      } else {
                                        return [
                                          createTextVNode(" थप " + toDisplayString(item["name"]) + " समाचार ", 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`</div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "d-flex align-center flex-wrap" }, [
                                      createVNode("span", { class: "text-h3 font-rajdhani font-weight-bold" }, toDisplayString(item["name"]), 1),
                                      createVNode(VSpacer),
                                      createVNode(VBtn, {
                                        rounded: "",
                                        color: "primary",
                                        variant: "tonal",
                                        href: "/category/" + item["slug"]
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" थप " + toDisplayString(item["name"]) + " समाचार ", 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["href"])
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`<!--[-->`);
                            ssrRenderList(item["news"], (item2, i) => {
                              _push4(`<!--[-->`);
                              if (i < 6) {
                                _push4(ssrRenderComponent(VHover, null, {
                                  default: withCtx(({ isHovering, props }, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(ssrRenderComponent(VCol, mergeProps({
                                        cols: "12",
                                        md: "4"
                                      }, props), {
                                        default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                          if (_push6) {
                                            _push6(ssrRenderComponent(VCard, {
                                              href: "/news/" + item2["id"]
                                            }, {
                                              default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                                if (_push7) {
                                                  _push7(ssrRenderComponent(VImg, {
                                                    cover: "",
                                                    height: "250",
                                                    class: [
                                                      "align-end px-2 pb-2",
                                                      isHovering ? "zoom" : ""
                                                    ],
                                                    src: item2["image"]
                                                  }, {
                                                    default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                      if (_push8) {
                                                        _push8(ssrRenderComponent(VCard, { style: { "background-color": "rgba(\n                                                        var(\n                                                            --v-theme-background\n                                                        ),\n                                                        0.8\n                                                    )", "backdrop-filter": "blur(10px)" } }, {
                                                          default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                            if (_push9) {
                                                              _push9(ssrRenderComponent(VCardTitle, { class: "text-h6 text-wrap font-weight-bold line-clamp-3" }, {
                                                                default: withCtx((_8, _push10, _parent10, _scopeId9) => {
                                                                  if (_push10) {
                                                                    _push10(`${ssrInterpolate(item2["title"])}`);
                                                                  } else {
                                                                    return [
                                                                      createTextVNode(toDisplayString(item2["title"]), 1)
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent9, _scopeId8));
                                                            } else {
                                                              return [
                                                                createVNode(VCardTitle, { class: "text-h6 text-wrap font-weight-bold line-clamp-3" }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(item2["title"]), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent8, _scopeId7));
                                                      } else {
                                                        return [
                                                          createVNode(VCard, { style: { "background-color": "rgba(\n                                                        var(\n                                                            --v-theme-background\n                                                        ),\n                                                        0.8\n                                                    )", "backdrop-filter": "blur(10px)" } }, {
                                                            default: withCtx(() => [
                                                              createVNode(VCardTitle, { class: "text-h6 text-wrap font-weight-bold line-clamp-3" }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(item2["title"]), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent7, _scopeId6));
                                                } else {
                                                  return [
                                                    createVNode(VImg, {
                                                      cover: "",
                                                      height: "250",
                                                      class: [
                                                        "align-end px-2 pb-2",
                                                        isHovering ? "zoom" : ""
                                                      ],
                                                      src: item2["image"]
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VCard, { style: { "background-color": "rgba(\n                                                        var(\n                                                            --v-theme-background\n                                                        ),\n                                                        0.8\n                                                    )", "backdrop-filter": "blur(10px)" } }, {
                                                          default: withCtx(() => [
                                                            createVNode(VCardTitle, { class: "text-h6 text-wrap font-weight-bold line-clamp-3" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(item2["title"]), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["class", "src"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent6, _scopeId5));
                                          } else {
                                            return [
                                              createVNode(VCard, {
                                                href: "/news/" + item2["id"]
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VImg, {
                                                    cover: "",
                                                    height: "250",
                                                    class: [
                                                      "align-end px-2 pb-2",
                                                      isHovering ? "zoom" : ""
                                                    ],
                                                    src: item2["image"]
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VCard, { style: { "background-color": "rgba(\n                                                        var(\n                                                            --v-theme-background\n                                                        ),\n                                                        0.8\n                                                    )", "backdrop-filter": "blur(10px)" } }, {
                                                        default: withCtx(() => [
                                                          createVNode(VCardTitle, { class: "text-h6 text-wrap font-weight-bold line-clamp-3" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(item2["title"]), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["class", "src"])
                                                ]),
                                                _: 2
                                              }, 1032, ["href"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent5, _scopeId4));
                                    } else {
                                      return [
                                        createVNode(VCol, mergeProps({
                                          cols: "12",
                                          md: "4"
                                        }, props), {
                                          default: withCtx(() => [
                                            createVNode(VCard, {
                                              href: "/news/" + item2["id"]
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VImg, {
                                                  cover: "",
                                                  height: "250",
                                                  class: [
                                                    "align-end px-2 pb-2",
                                                    isHovering ? "zoom" : ""
                                                  ],
                                                  src: item2["image"]
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VCard, { style: { "background-color": "rgba(\n                                                        var(\n                                                            --v-theme-background\n                                                        ),\n                                                        0.8\n                                                    )", "backdrop-filter": "blur(10px)" } }, {
                                                      default: withCtx(() => [
                                                        createVNode(VCardTitle, { class: "text-h6 text-wrap font-weight-bold line-clamp-3" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(item2["title"]), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["class", "src"])
                                              ]),
                                              _: 2
                                            }, 1032, ["href"])
                                          ]),
                                          _: 2
                                        }, 1040)
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
                            _push4(`<!--]-->`);
                          } else {
                            return [
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex align-center flex-wrap" }, [
                                    createVNode("span", { class: "text-h3 font-rajdhani font-weight-bold" }, toDisplayString(item["name"]), 1),
                                    createVNode(VSpacer),
                                    createVNode(VBtn, {
                                      rounded: "",
                                      color: "primary",
                                      variant: "tonal",
                                      href: "/category/" + item["slug"]
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" थप " + toDisplayString(item["name"]) + " समाचार ", 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["href"])
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              (openBlock(true), createBlock(Fragment, null, renderList(item["news"], (item2, i) => {
                                return openBlock(), createBlock(Fragment, null, [
                                  i < 6 ? (openBlock(), createBlock(VHover, { key: 0 }, {
                                    default: withCtx(({ isHovering, props }) => [
                                      createVNode(VCol, mergeProps({
                                        cols: "12",
                                        md: "4"
                                      }, props), {
                                        default: withCtx(() => [
                                          createVNode(VCard, {
                                            href: "/news/" + item2["id"]
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VImg, {
                                                cover: "",
                                                height: "250",
                                                class: [
                                                  "align-end px-2 pb-2",
                                                  isHovering ? "zoom" : ""
                                                ],
                                                src: item2["image"]
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VCard, { style: { "background-color": "rgba(\n                                                        var(\n                                                            --v-theme-background\n                                                        ),\n                                                        0.8\n                                                    )", "backdrop-filter": "blur(10px)" } }, {
                                                    default: withCtx(() => [
                                                      createVNode(VCardTitle, { class: "text-h6 text-wrap font-weight-bold line-clamp-3" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(item2["title"]), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1032, ["class", "src"])
                                            ]),
                                            _: 2
                                          }, 1032, ["href"])
                                        ]),
                                        _: 2
                                      }, 1040)
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ], 64);
                              }), 256))
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex align-center flex-wrap" }, [
                                  createVNode("span", { class: "text-h3 font-rajdhani font-weight-bold" }, toDisplayString(item["name"]), 1),
                                  createVNode(VSpacer),
                                  createVNode(VBtn, {
                                    rounded: "",
                                    color: "primary",
                                    variant: "tonal",
                                    href: "/category/" + item["slug"]
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" थप " + toDisplayString(item["name"]) + " समाचार ", 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["href"])
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            (openBlock(true), createBlock(Fragment, null, renderList(item["news"], (item2, i) => {
                              return openBlock(), createBlock(Fragment, null, [
                                i < 6 ? (openBlock(), createBlock(VHover, { key: 0 }, {
                                  default: withCtx(({ isHovering, props }) => [
                                    createVNode(VCol, mergeProps({
                                      cols: "12",
                                      md: "4"
                                    }, props), {
                                      default: withCtx(() => [
                                        createVNode(VCard, {
                                          href: "/news/" + item2["id"]
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VImg, {
                                              cover: "",
                                              height: "250",
                                              class: [
                                                "align-end px-2 pb-2",
                                                isHovering ? "zoom" : ""
                                              ],
                                              src: item2["image"]
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VCard, { style: { "background-color": "rgba(\n                                                        var(\n                                                            --v-theme-background\n                                                        ),\n                                                        0.8\n                                                    )", "backdrop-filter": "blur(10px)" } }, {
                                                  default: withCtx(() => [
                                                    createVNode(VCardTitle, { class: "text-h6 text-wrap font-weight-bold line-clamp-3" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item2["title"]), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1032, ["class", "src"])
                                          ]),
                                          _: 2
                                        }, 1032, ["href"])
                                      ]),
                                      _: 2
                                    }, 1040)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ], 64);
                            }), 256))
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(VLazy, {
                    options: { threshold: 0.5 },
                    transition: "fade-transition"
                  }, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex align-center flex-wrap" }, [
                                createVNode("span", { class: "text-h3 font-rajdhani font-weight-bold" }, toDisplayString(item["name"]), 1),
                                createVNode(VSpacer),
                                createVNode(VBtn, {
                                  rounded: "",
                                  color: "primary",
                                  variant: "tonal",
                                  href: "/category/" + item["slug"]
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" थप " + toDisplayString(item["name"]) + " समाचार ", 1)
                                  ]),
                                  _: 2
                                }, 1032, ["href"])
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          (openBlock(true), createBlock(Fragment, null, renderList(item["news"], (item2, i) => {
                            return openBlock(), createBlock(Fragment, null, [
                              i < 6 ? (openBlock(), createBlock(VHover, { key: 0 }, {
                                default: withCtx(({ isHovering, props }) => [
                                  createVNode(VCol, mergeProps({
                                    cols: "12",
                                    md: "4"
                                  }, props), {
                                    default: withCtx(() => [
                                      createVNode(VCard, {
                                        href: "/news/" + item2["id"]
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VImg, {
                                            cover: "",
                                            height: "250",
                                            class: [
                                              "align-end px-2 pb-2",
                                              isHovering ? "zoom" : ""
                                            ],
                                            src: item2["image"]
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCard, { style: { "background-color": "rgba(\n                                                        var(\n                                                            --v-theme-background\n                                                        ),\n                                                        0.8\n                                                    )", "backdrop-filter": "blur(10px)" } }, {
                                                default: withCtx(() => [
                                                  createVNode(VCardTitle, { class: "text-h6 text-wrap font-weight-bold line-clamp-3" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item2["title"]), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1032, ["class", "src"])
                                        ]),
                                        _: 2
                                      }, 1032, ["href"])
                                    ]),
                                    _: 2
                                  }, 1040)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true)
                            ], 64);
                          }), 256))
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["options"])
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (item["name"] == "स्वास्थ्य" && item["news"].length > 0) {
          _push(ssrRenderComponent(VContainer, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(VLazy, {
                  options: { threshold: 0.5 },
                  transition: "fade-transition"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(twoFour), { data: item }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(unref(twoFour), { data: item }, null, 8, ["data"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(VLazy, {
                    options: { threshold: 0.5 },
                    transition: "fade-transition"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(twoFour), { data: item }, null, 8, ["data"])
                    ]),
                    _: 2
                  }, 1032, ["options"])
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (index == 1) {
          _push(ssrRenderComponent(VLazy, {
            options: { threshold: 0.5 },
            transition: "fade-transition"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(provinceNews), {
                  provinces: __props.provinces,
                  provincenews: __props.provincenews
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(unref(provinceNews), {
                    provinces: __props.provinces,
                    provincenews: __props.provincenews
                  }, null, 8, ["provinces", "provincenews"])
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (index == 6) {
          _push(ssrRenderComponent(VLazy, {
            options: { threshold: 0.5 },
            transition: "fade-transition"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(photoFeature), { photos: __props.photos }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(unref(photoFeature), { photos: __props.photos }, null, 8, ["photos"])
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(VLazy, {
        options: { threshold: 0.5 },
        transition: "fade-transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.videos.length > 0) {
              _push2(ssrRenderComponent(unref(videoFeature), { videos: __props.videos }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.videos.length > 0 ? (openBlock(), createBlock(unref(videoFeature), {
                key: 0,
                videos: __props.videos
              }, null, 8, ["videos"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
