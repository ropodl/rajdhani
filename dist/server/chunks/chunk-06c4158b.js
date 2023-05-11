import { defineAsyncComponent, ref, reactive, onMounted, nextTick, withCtx, unref, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, isRef, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { mdiClockOutline, mdiClose } from "@mdi/js";
import Panzoom from "@panzoom/panzoom";
import { VBtn } from "vuetify/lib/components/VBtn/index.mjs";
import { VCardTitle, VCardText, VCard } from "vuetify/lib/components/VCard/index.mjs";
import { VContainer, VRow, VCol } from "vuetify/lib/components/VGrid/index.mjs";
import { VIcon } from "vuetify/lib/components/VIcon/index.mjs";
import { VImg } from "vuetify/lib/components/VImg/index.mjs";
import { VOverlay } from "vuetify/lib/components/VOverlay/index.mjs";
const news_detail_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "news_detail",
  __ssrInlineRender: true,
  props: {
    currentnews: Object,
    currentnewsdate: String,
    latest: Object,
    trending: Object,
    related: Object,
    advertisements: Object
  },
  setup(__props) {
    const tabNews = defineAsyncComponent(
      () => import("./chunk-de5cb431.js")
    );
    const relatedNews = defineAsyncComponent(
      () => import("./chunk-3fb6730f.js")
    );
    const dynamicContent = ref(null);
    let thumbIndex = ref(null);
    let imageSrcList = reactive([]);
    let showGallery = ref(false);
    let allImagesAlt = reactive([]);
    onMounted(() => {
      imageCollector();
    });
    const imageCollector = () => {
      nextTick(() => {
        const content = dynamicContent.value.$el;
        const allImages = content.getElementsByTagName("img");
        if (allImages.length > 0) {
          Array.from(allImages).forEach((element, index) => {
            console.log(element);
            allImagesAlt.push(
              content.getElementsByTagName("img")[index].alt
            );
            imageSrcList.push(element.src);
            element.addEventListener("click", function() {
              thumbIndex.value = index;
              showGallery.value = true;
              nextTick(() => {
                const elem = document.getElementById("scene");
                const panzoom = Panzoom(elem, {
                  maxScale: 5
                });
                elem.parentElement.addEventListener(
                  "wheel",
                  panzoom.zoomWithWheel
                );
                console.log(showGallery.value);
              });
            });
          });
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
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
                        _push4(`<article${_scopeId3}>`);
                        _push4(ssrRenderComponent(VCardTitle, {
                          class: "text-h3 font-weight-black text-wrap px-0",
                          style: { "line-height": "4rem" }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, { class: "px-0" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, { icon: unref(mdiClockOutline) }, null, _parent5, _scopeId4));
                              _push5(` ${ssrInterpolate(__props.currentnewsdate)}`);
                            } else {
                              return [
                                createVNode(VIcon, { icon: unref(mdiClockOutline) }, null, 8, ["icon"]),
                                createTextVNode(" " + toDisplayString(__props.currentnewsdate), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VImg, {
                          eager: "",
                          class: "rounded-lg align-start",
                          src: __props.currentnews["image"]
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, {
                          ref_key: "dynamicContent",
                          ref: dynamicContent,
                          class: "px-0 dynamic-content"
                        }, null, _parent4, _scopeId3));
                        _push4(`</article>`);
                      } else {
                        return [
                          createVNode("article", null, [
                            createVNode(VCardTitle, {
                              class: "text-h3 font-weight-black text-wrap px-0",
                              style: { "line-height": "4rem" },
                              textContent: toDisplayString(__props.currentnews["title"])
                            }, null, 8, ["textContent"]),
                            createVNode(VCardText, { class: "px-0" }, {
                              default: withCtx(() => [
                                createVNode(VIcon, { icon: unref(mdiClockOutline) }, null, 8, ["icon"]),
                                createTextVNode(" " + toDisplayString(__props.currentnewsdate), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VImg, {
                              eager: "",
                              class: "rounded-lg align-start",
                              src: __props.currentnews["image"]
                            }, null, 8, ["src"]),
                            createVNode(VCardText, {
                              ref_key: "dynamicContent",
                              ref: dynamicContent,
                              class: "px-0 dynamic-content",
                              innerHTML: __props.currentnews["description"]
                            }, null, 8, ["innerHTML"])
                          ])
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
                        if (__props.advertisements.sm_ad) {
                          _push4(`<div class="d-flex flex-wrap justify-space-between"${_scopeId3}>`);
                          _push4(ssrRenderComponent(VCard, {
                            class: "mb-3 w-100 h-100",
                            href: __props.advertisements.sm_ad[0].advertisement.url,
                            target: "_blank",
                            "max-height": "290",
                            "max-width": "290"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VImg, {
                                  src: __props.advertisements.sm_ad[0].advertisement.image,
                                  alt: __props.advertisements.sm_ad[0].advertisement.title
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VImg, {
                                    src: __props.advertisements.sm_ad[0].advertisement.image,
                                    alt: __props.advertisements.sm_ad[0].advertisement.title
                                  }, null, 8, ["src", "alt"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          if (__props.advertisements.sm_ad[1]) {
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
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(ssrRenderComponent(unref(tabNews), {
                          latest: __props.latest,
                          trending: __props.trending
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          __props.advertisements.sm_ad ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "d-flex flex-wrap justify-space-between"
                          }, [
                            createVNode(VCard, {
                              class: "mb-3 w-100 h-100",
                              href: __props.advertisements.sm_ad[0].advertisement.url,
                              target: "_blank",
                              "max-height": "290",
                              "max-width": "290"
                            }, {
                              default: withCtx(() => [
                                createVNode(VImg, {
                                  src: __props.advertisements.sm_ad[0].advertisement.image,
                                  alt: __props.advertisements.sm_ad[0].advertisement.title
                                }, null, 8, ["src", "alt"])
                              ]),
                              _: 1
                            }, 8, ["href"]),
                            __props.advertisements.sm_ad[1] ? (openBlock(), createBlock(VCard, {
                              key: 0,
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
                            }, 8, ["href"])) : createCommentVNode("", true)
                          ])) : createCommentVNode("", true),
                          createVNode(unref(tabNews), {
                            latest: __props.latest,
                            trending: __props.trending
                          }, null, 8, ["latest", "trending"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (__props.related.length > 0) {
                    _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(relatedNews), { related: __props.related }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(relatedNews), { related: __props.related }, null, 8, ["related"])
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
                    createVNode(VCol, {
                      cols: "12",
                      md: "9"
                    }, {
                      default: withCtx(() => [
                        createVNode("article", null, [
                          createVNode(VCardTitle, {
                            class: "text-h3 font-weight-black text-wrap px-0",
                            style: { "line-height": "4rem" },
                            textContent: toDisplayString(__props.currentnews["title"])
                          }, null, 8, ["textContent"]),
                          createVNode(VCardText, { class: "px-0" }, {
                            default: withCtx(() => [
                              createVNode(VIcon, { icon: unref(mdiClockOutline) }, null, 8, ["icon"]),
                              createTextVNode(" " + toDisplayString(__props.currentnewsdate), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VImg, {
                            eager: "",
                            class: "rounded-lg align-start",
                            src: __props.currentnews["image"]
                          }, null, 8, ["src"]),
                          createVNode(VCardText, {
                            ref_key: "dynamicContent",
                            ref: dynamicContent,
                            class: "px-0 dynamic-content",
                            innerHTML: __props.currentnews["description"]
                          }, null, 8, ["innerHTML"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "3"
                    }, {
                      default: withCtx(() => [
                        __props.advertisements.sm_ad ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "d-flex flex-wrap justify-space-between"
                        }, [
                          createVNode(VCard, {
                            class: "mb-3 w-100 h-100",
                            href: __props.advertisements.sm_ad[0].advertisement.url,
                            target: "_blank",
                            "max-height": "290",
                            "max-width": "290"
                          }, {
                            default: withCtx(() => [
                              createVNode(VImg, {
                                src: __props.advertisements.sm_ad[0].advertisement.image,
                                alt: __props.advertisements.sm_ad[0].advertisement.title
                              }, null, 8, ["src", "alt"])
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          __props.advertisements.sm_ad[1] ? (openBlock(), createBlock(VCard, {
                            key: 0,
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
                          }, 8, ["href"])) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true),
                        createVNode(unref(tabNews), {
                          latest: __props.latest,
                          trending: __props.trending
                        }, null, 8, ["latest", "trending"])
                      ]),
                      _: 1
                    }),
                    __props.related.length > 0 ? (openBlock(), createBlock(VCol, {
                      key: 0,
                      cols: "12"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(relatedNews), { related: __props.related }, null, 8, ["related"])
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
                  createVNode(VCol, {
                    cols: "12",
                    md: "9"
                  }, {
                    default: withCtx(() => [
                      createVNode("article", null, [
                        createVNode(VCardTitle, {
                          class: "text-h3 font-weight-black text-wrap px-0",
                          style: { "line-height": "4rem" },
                          textContent: toDisplayString(__props.currentnews["title"])
                        }, null, 8, ["textContent"]),
                        createVNode(VCardText, { class: "px-0" }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { icon: unref(mdiClockOutline) }, null, 8, ["icon"]),
                            createTextVNode(" " + toDisplayString(__props.currentnewsdate), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(VImg, {
                          eager: "",
                          class: "rounded-lg align-start",
                          src: __props.currentnews["image"]
                        }, null, 8, ["src"]),
                        createVNode(VCardText, {
                          ref_key: "dynamicContent",
                          ref: dynamicContent,
                          class: "px-0 dynamic-content",
                          innerHTML: __props.currentnews["description"]
                        }, null, 8, ["innerHTML"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "3"
                  }, {
                    default: withCtx(() => [
                      __props.advertisements.sm_ad ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "d-flex flex-wrap justify-space-between"
                      }, [
                        createVNode(VCard, {
                          class: "mb-3 w-100 h-100",
                          href: __props.advertisements.sm_ad[0].advertisement.url,
                          target: "_blank",
                          "max-height": "290",
                          "max-width": "290"
                        }, {
                          default: withCtx(() => [
                            createVNode(VImg, {
                              src: __props.advertisements.sm_ad[0].advertisement.image,
                              alt: __props.advertisements.sm_ad[0].advertisement.title
                            }, null, 8, ["src", "alt"])
                          ]),
                          _: 1
                        }, 8, ["href"]),
                        __props.advertisements.sm_ad[1] ? (openBlock(), createBlock(VCard, {
                          key: 0,
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
                        }, 8, ["href"])) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true),
                      createVNode(unref(tabNews), {
                        latest: __props.latest,
                        trending: __props.trending
                      }, null, 8, ["latest", "trending"])
                    ]),
                    _: 1
                  }),
                  __props.related.length > 0 ? (openBlock(), createBlock(VCol, {
                    key: 0,
                    cols: "12"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(relatedNews), { related: __props.related }, null, 8, ["related"])
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
      _push(ssrRenderComponent(VOverlay, {
        eager: "",
        persistent: "",
        "no-click-animation": "",
        theme: "dark",
        "model-value": unref(showGallery),
        "content-class": "w-100 gallery-content"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, {
              icon: "",
              theme: "dark",
              color: "white",
              variant: "tonal",
              onClick: ($event) => isRef(showGallery) ? showGallery.value = false : showGallery = false,
              style: { "position": "absolute", "top": "10px", "right": "10px", "z-index": "9999999999" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, { icon: unref(mdiClose) }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, { icon: unref(mdiClose) }, null, 8, ["icon"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div id="scene" style="${ssrRenderStyle({ "height": "calc(100vh - 80px)" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(VImg, {
              src: unref(imageSrcList)[unref(thumbIndex)]
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(VCard, {
              class: "w-100 d-flex align-center justify-center pa-4",
              height: "80",
              style: { "position": "relative" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<ul class="d-flex"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(imageSrcList), (image, i) => {
                    _push3(`<li class="${ssrRenderClass([i + 1 >= unref(imageSrcList).length ? "" : "mr-3", "list-style-none"])}" style="${ssrRenderStyle(
                      unref(thumbIndex) == i ? "border: 2px solid red" : "border: 2px solid transparent"
                    )}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(VImg, {
                      height: "50",
                      width: "100",
                      src: image,
                      class: "pa-1",
                      onClick: ($event) => isRef(thumbIndex) ? thumbIndex.value = i : thumbIndex = i,
                      style: { "cursor": "pointer" }
                    }, null, _parent3, _scopeId2));
                    _push3(`</li>`);
                  });
                  _push3(`<!--]--></ul>`);
                } else {
                  return [
                    createVNode("ul", { class: "d-flex" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(imageSrcList), (image, i) => {
                        return openBlock(), createBlock("li", {
                          class: ["list-style-none", i + 1 >= unref(imageSrcList).length ? "" : "mr-3"],
                          style: unref(thumbIndex) == i ? "border: 2px solid red" : "border: 2px solid transparent"
                        }, [
                          createVNode(VImg, {
                            height: "50",
                            width: "100",
                            src: image,
                            class: "pa-1",
                            onClick: ($event) => isRef(thumbIndex) ? thumbIndex.value = i : thumbIndex = i,
                            style: { "cursor": "pointer" }
                          }, null, 8, ["src", "onClick"])
                        ], 6);
                      }), 256))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, {
                icon: "",
                theme: "dark",
                color: "white",
                variant: "tonal",
                onClick: ($event) => isRef(showGallery) ? showGallery.value = false : showGallery = false,
                style: { "position": "absolute", "top": "10px", "right": "10px", "z-index": "9999999999" }
              }, {
                default: withCtx(() => [
                  createVNode(VIcon, { icon: unref(mdiClose) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode("div", {
                id: "scene",
                style: { "height": "calc(100vh - 80px)" }
              }, [
                createVNode(VImg, {
                  src: unref(imageSrcList)[unref(thumbIndex)]
                }, null, 8, ["src"])
              ]),
              createVNode(VCard, {
                class: "w-100 d-flex align-center justify-center pa-4",
                height: "80",
                style: { "position": "relative" }
              }, {
                default: withCtx(() => [
                  createVNode("ul", { class: "d-flex" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(imageSrcList), (image, i) => {
                      return openBlock(), createBlock("li", {
                        class: ["list-style-none", i + 1 >= unref(imageSrcList).length ? "" : "mr-3"],
                        style: unref(thumbIndex) == i ? "border: 2px solid red" : "border: 2px solid transparent"
                      }, [
                        createVNode(VImg, {
                          height: "50",
                          width: "100",
                          src: image,
                          class: "pa-1",
                          onClick: ($event) => isRef(thumbIndex) ? thumbIndex.value = i : thumbIndex = i,
                          style: { "cursor": "pointer" }
                        }, null, 8, ["src", "onClick"])
                      ], 6);
                    }), 256))
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/news_detail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
