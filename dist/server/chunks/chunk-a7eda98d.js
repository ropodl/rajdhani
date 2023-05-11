import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrGetDirectiveProps } from "vue/server-renderer";
import { mdiArrowUp } from "@mdi/js";
import { VBtn } from "vuetify/lib/components/VBtn/index.mjs";
import { Scroll } from "vuetify/lib/directives/index.mjs";
function useScrollTo(id, offset) {
  var element = document.getElementById(id);
  var headerOffset = offset;
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
}
const _sfc_main = {
  __name: "gotop",
  __ssrInlineRender: true,
  setup(__props) {
    let show = ref(false);
    const onScroll = (e) => {
      if (typeof window === "undefined")
        return;
      const top = window.scrollY || 0;
      show.value = top > 500 ? true : false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VBtn, mergeProps({
        class: "position-fixed",
        "aria-label": "Go to top button",
        icon: unref(mdiArrowUp),
        style: {
          bottom: unref(show) ? "40px" : "-70px",
          right: "40px",
          zIndex: "999",
          transition: "all 250ms cubic-bezier(.17,.26,1,.32) 0s"
        },
        onClick: ($event) => unref(useScrollTo)("app", 10)
      }, _attrs, ssrGetDirectiveProps(_ctx, Scroll, onScroll)), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/layout/gotop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
