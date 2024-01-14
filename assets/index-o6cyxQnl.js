import { _ as __vitePreload, i as importShared } from './_virtual___federation_fn_import-08EvUJlr.js';
import { r as reactExports } from './__federation_shared_react--XDvrPc_.js';
import { r as reactDomExports } from './__federation_shared_react-dom-xrZ2K6C7.js';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m$1=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m$1.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}

var jsxRuntimeExports = jsxRuntime.exports;

var client = {};

var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}

const remotesMap = {
'product-mfe':{url:'https://vipulpathak113.github.io/product-mfe/assets/product-mfe-entry.js',format:'esm',from:'vite'},
  'cart-mfe':{url:'https://vipulpathak113.github.io/cart-mfe/assets/cart-mfe-entry.js',format:'esm',from:'vite'},
  'about-mfe':{url:'https://vipulpathak113.github.io/about-mfe/assets/about-mfe-entry.js',format:'esm',from:'vite'}
};
                const loadJS = async (url, fn) => {
                    const resolvedUrl = typeof url === 'function' ? await url() : url;
                    const script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.onload = fn;
                    script.src = resolvedUrl;
                    document.getElementsByTagName('head')[0].appendChild(script);
                };

                function get(name, remoteFrom) {
                    return __federation_import(name).then(module => () => {
                        if (remoteFrom === 'webpack') {
                            return Object.prototype.toString.call(module).indexOf('Module') > -1 && module.default ? module.default : module
                        }
                        return module
                    })
                }

                const wrapShareModule = remoteFrom => {
                    return {
                        'react':{'18.2.0':{get:()=>get(new URL('__federation_shared_react--XDvrPc_.js', import.meta.url).href, remoteFrom), loaded:1}},'react-dom':{'18.2.0':{get:()=>get(new URL('__federation_shared_react-dom-xrZ2K6C7.js', import.meta.url).href, remoteFrom), loaded:1}},'react-router-dom':{'6.21.2':{get:()=>get(new URL('__federation_shared_react-router-dom-ZJRX0Xa4.js', import.meta.url).href, remoteFrom), loaded:1}},'zustand':{'4.4.7':{get:()=>get(new URL('__federation_shared_zustand-1OVWEeHq.js', import.meta.url).href, remoteFrom), loaded:1}}
                    }
                };

                async function __federation_import(name) {
                    return __vitePreload(() => import(name),true?__vite__mapDeps([]):void 0);
                }

                async function __federation_method_ensure(remoteId) {
                    const remote = remotesMap[remoteId];
                    if (!remote.inited) {
                        if ('var' === remote.format) {
                            // loading js with script tag
                            return new Promise(resolve => {
                                const callback = () => {
                                    if (!remote.inited) {
                                        remote.lib = window[remoteId];
                                        remote.lib.init(wrapShareModule(remote.from));
                                        remote.inited = true;
                                    }
                                    resolve(remote.lib);
                                };
                                return loadJS(remote.url, callback);
                            });
                        } else if (['esm', 'systemjs'].includes(remote.format)) {
                            // loading js with import(...)
                            return new Promise((resolve, reject) => {
                                const getUrl = typeof remote.url === 'function' ? remote.url : () => Promise.resolve(remote.url);
                                getUrl().then(url => {
                                    __vitePreload(() => import(/* @vite-ignore */ url),true?__vite__mapDeps([]):void 0).then(lib => {
                                        if (!remote.inited) {
                                            const shareScope = wrapShareModule(remote.from);
                                            lib.init(shareScope);
                                            remote.lib = lib;
                                            remote.lib.init(shareScope);
                                            remote.inited = true;
                                        }
                                        resolve(remote.lib);
                                    }).catch(reject);
                                });
                            })
                        }
                    } else {
                        return remote.lib;
                    }
                }

                function __federation_method_unwrapDefault(module) {
                    return (module?.__esModule || module?.[Symbol.toStringTag] === 'Module') ? module.default : module
                }

                function __federation_method_getRemote(remoteName, componentName) {
                    return __federation_method_ensure(remoteName).then((remote) => remote.get(componentName).then(factory => factory()));
                }

const Logo = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "64",
    height: "64",
    viewBox: "0 0 213 213",
    fill: "none",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "213", height: "213", fill: "white" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          d: "M66.6782 86.0918C66.6782 108.029 84.4234 125.858 106.43 125.858V86.0918H66.6782Z",
          fill: "#2196F3"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          d: "M66.6782 125.781C66.6782 147.718 84.4234 165.547 106.43 165.547V125.781H66.6782Z",
          fill: "#FFC107"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          d: "M106.508 86.0918C128.438 86.0918 146.26 103.843 146.26 125.858H106.508V86.0918Z",
          fill: "#FFC107"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          d: "M146.26 125.781C146.26 147.718 128.515 165.547 106.508 165.547V125.781H146.26Z",
          fill: "#F44336"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          d: "M146.26 87.0995C146.26 65.1622 128.515 47.3333 106.508 47.3333V87.0995H146.26Z",
          fill: "#FFC107"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          d: "M66.6782 87.0995C66.6782 65.1622 84.4234 47.3333 106.43 47.3333V87.0995H66.6782Z",
          fill: "#F44336"
        }
      )
    ]
  }
);

const {Link} = await importShared('react-router-dom');

const __federation_var_cartmfestore = await __federation_method_getRemote("cart-mfe" , "./store");
 let useCartStore = __federation_method_unwrapDefault(__federation_var_cartmfestore); 
const Header = () => {
  const products = useCartStore((state) => state.products);
  const total = products.reduce((accumulator, product) => {
    return accumulator + product.quantity;
  }, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 bg-white border-b flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-screen-xl flex justify-between items-center w-full mx-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-8 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "font-semibold text-sm", children: "Product" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "font-semibold text-sm", children: "About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "#",
          className: "font-semibold text-sm text-blue-600 border-blue-600 border-2 rounded-full px-4 py-1 hover:bg-blue-600 hover:text-white transition-all duration-200",
          children: "Our Deals"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "svg",
        {
          width: "17",
          height: "16",
          viewBox: "0 0 17 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M2.95072 1.99141C1.79204 3.14838 1.11812 4.70363 1.06631 6.34023C1.0145 7.97682 1.58868 9.57159 2.67185 10.7995C3.75503 12.0275 5.26567 12.7962 6.89594 12.9491C8.49648 13.0991 10.0941 12.6444 11.3749 11.6766L14.7061 15.0085L14.7061 15.0085C14.789 15.0914 14.8873 15.1571 14.9955 15.2019C15.1038 15.2468 15.2198 15.2698 15.3369 15.2698C15.4541 15.2698 15.5701 15.2468 15.6783 15.2019C15.7866 15.1571 15.8849 15.0914 15.9678 15.0085C16.0506 14.9257 16.1163 14.8274 16.1611 14.7191C16.206 14.6109 16.229 14.4949 16.229 14.3777C16.229 14.2606 16.206 14.1446 16.1611 14.0363C16.1163 13.9281 16.0506 13.8298 15.9678 13.7469L15.9677 13.7469L12.636 10.416C13.6013 9.13496 14.0539 7.53846 13.903 5.93943C13.7493 4.31054 12.9808 2.80139 11.7539 1.719C10.5269 0.636623 8.93373 0.0623154 7.29838 0.11292C5.66303 0.163525 4.10838 0.835233 2.95072 1.99141ZM2.95072 1.99141L3.02138 2.06217L2.95072 1.99141ZM10.7887 3.25366C11.2263 3.68416 11.5743 4.19703 11.8127 4.76269C12.051 5.32835 12.175 5.93561 12.1775 6.54944C12.18 7.16327 12.061 7.77152 11.8272 8.3391C11.5935 8.90669 11.2497 9.42238 10.8156 9.85642C10.3816 10.2905 9.86589 10.6343 9.29831 10.868C8.73072 11.1018 8.12248 11.2208 7.50865 11.2183C6.89482 11.2158 6.28756 11.0918 5.7219 10.8535C5.15623 10.6151 4.64336 10.2671 4.21287 9.82954C3.35255 8.95509 2.87263 7.77613 2.87762 6.54944C2.88262 5.32275 3.37213 4.14773 4.23954 3.28033C5.10694 2.41292 6.28196 1.92341 7.50865 1.91841C8.73533 1.91342 9.9143 2.39335 10.7887 3.25366Z",
              fill: "black",
              stroke: "black",
              strokeWidth: "0.2"
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/cart", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "relative", id: "cart-btn", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "svg",
          {
            width: "19",
            height: "17",
            viewBox: "0 0 19 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                d: "M11.5834 16.8334C12.1359 16.8334 12.6658 16.6139 13.0566 16.2232C13.4473 15.8325 13.6667 15.3026 13.6667 14.75C13.6667 14.1975 13.4473 13.6676 13.0566 13.2769C12.6658 12.8862 12.1359 12.6667 11.5834 12.6667C11.0309 12.6667 10.501 12.8862 10.1103 13.2769C9.71957 13.6676 9.50008 14.1975 9.50008 14.75C9.50008 15.3026 9.71957 15.8325 10.1103 16.2232C10.501 16.6139 11.0309 16.8334 11.5834 16.8334ZM4.29174 16.8334C4.84428 16.8334 5.37418 16.6139 5.76488 16.2232C6.15558 15.8325 6.37508 15.3026 6.37508 14.75C6.37508 14.1975 6.15558 13.6676 5.76488 13.2769C5.37418 12.8862 4.84428 12.6667 4.29174 12.6667C3.73921 12.6667 3.20931 12.8862 2.81861 13.2769C2.4279 13.6676 2.20841 14.1975 2.20841 14.75C2.20841 15.3026 2.4279 15.8325 2.81861 16.2232C3.20931 16.6139 3.73921 16.8334 4.29174 16.8334ZM17.873 2.16981C18.133 2.16142 18.3796 2.05223 18.5606 1.86531C18.7416 1.6784 18.8428 1.42842 18.8428 1.16825C18.8428 0.908074 18.7416 0.658098 18.5606 0.471184C18.3796 0.284271 18.133 0.175074 17.873 0.166687H16.674C15.7345 0.166687 14.922 0.81877 14.7178 1.73544L13.4126 7.61252C13.2084 8.52919 12.3959 9.18127 11.4563 9.18127H3.63133L2.12924 3.17085H11.8636C12.1212 3.1591 12.3644 3.0485 12.5425 2.86205C12.7206 2.67561 12.82 2.42767 12.82 2.16981C12.82 1.91195 12.7206 1.66401 12.5425 1.47757C12.3644 1.29113 12.1212 1.18052 11.8636 1.16877H2.12924C1.82473 1.16868 1.5242 1.23802 1.25051 1.37151C0.976816 1.50501 0.737162 1.69915 0.549763 1.93917C0.362364 2.17919 0.232155 2.45878 0.169035 2.75668C0.105913 3.05458 0.111544 3.36295 0.185495 3.65835L1.68758 9.66669C1.79586 10.1002 2.046 10.4851 2.39821 10.7601C2.75042 11.0351 3.18447 11.1845 3.63133 11.1844H11.4563C12.368 11.1845 13.2524 10.8737 13.9636 10.3032C14.6748 9.73281 15.1701 8.93687 15.3678 8.04689L16.674 2.16981H17.873Z",
                fill: "black"
              }
            )
          }
        ),
        total > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full bg-blue-600 text-white absolute -top-3 -right-3 w-4 h-4 flex items-center justify-center text-[8px]", children: total })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          className: "inline-block h-10 w-10 rounded-full ring-2 ring-white",
          src: "https://mui.com/static/images/avatar/1.jpg",
          alt: ""
        }
      )
    ] })
  ] }) });
};

const Footer = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#020203] w-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-screen-xl flex flex-col gap-3 w-full mx-8 my-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-white font-medium text-3xl", children: "Sign Up To Our Newsletter" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-sm font-thin", children: "Be the first to hear about the latest offers." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          name: "Your Email",
          placeholder: "Your Email",
          className: "bg-[#020203] border border-white p-3 placeholder:text-white rounded-md w-64 h-12"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-blue-600 px-6 h-12 text-white rounded-full text-sm", children: "Subscribe" })
    ] })
  ] }) }) });
};

const {Outlet} = await importShared('react-router-dom');
const Layout = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};

const {createBrowserRouter} = await importShared('react-router-dom');
const __federation_var_productmfeApp = await __federation_method_getRemote("product-mfe" , "./App");
 let ProductApplication = __federation_method_unwrapDefault(__federation_var_productmfeApp); 
const __federation_var_cartmfeApp = await __federation_method_getRemote("cart-mfe" , "./App");
 let CartApplication = __federation_method_unwrapDefault(__federation_var_cartmfeApp); 
const __federation_var_aboutmfeApp = await __federation_method_getRemote("about-mfe" , "./App");
 let AboutApplication = __federation_method_unwrapDefault(__federation_var_aboutmfeApp); 
const router = createBrowserRouter([
  {
    path: "/",
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, {}),
    children: [
      {
        index: true,
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductApplication, {})
      },
      {
        path: "cart",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(CartApplication, {})
      },
      {
        path: "about",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(AboutApplication, {})
      }
    ]
  }
], {
  basename: "/shopping-mfe/"
});

const {RouterProvider} = await importShared('react-router-dom');
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RouterProvider, { router });
}

const React = await importShared('react');
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
