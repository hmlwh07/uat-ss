(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app__metronic_core_index_ts-src_app_pages_policy_policy_service_ts-src_app_pages_-b29154"],{

/***/ 68328:
/*!************************************************************!*\
  !*** ./src/app/_metronic/configs/default-layout.config.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultLayoutConfig": () => (/* binding */ DefaultLayoutConfig)
/* harmony export */ });
const DefaultLayoutConfig = {
    demo: 'demo1',
    // Javascript Settings
    // breakpoints: {
    //   sm: 576,
    //   md: 768,
    //   lg: 1000,
    //   xl: 1200,
    //   xxl: 1400,
    // },
    // lg: 1500,
    // xl: 1700,
    // xxl: 1900,
    js: {
        breakpoints: {
            sm: 576,
            md: 768,
            lg: 1000,
            xl: 1200,
            xxl: 1400,
        },
        colors: {
            theme: {
                base: {
                    white: '#ffffff',
                    primary: '#3699FF',
                    secondary: '#E5EAEE',
                    success: '#1BC5BD',
                    info: '#8950FC',
                    warning: '#FFA800',
                    danger: '#F64E60',
                    light: '#E4E6EF',
                    dark: '#181C32',
                },
                light: {
                    white: '#ffffff',
                    primary: '#E1F0FF',
                    secondary: '#EBEDF3',
                    success: '#C9F7F5',
                    info: '#EEE5FF',
                    warning: '#FFF4DE',
                    danger: '#FFE2E5',
                    light: '#F3F6F9',
                    dark: '#D6D6E0',
                },
                inverse: {
                    white: '#ffffff',
                    primary: '#ffffff',
                    secondary: '#3F4254',
                    success: '#ffffff',
                    info: '#ffffff',
                    warning: '#ffffff',
                    danger: '#ffffff',
                    light: '#464E5F',
                    dark: '#ffffff',
                },
            },
            gray: {
                'gray-100': '#F3F6F9',
                'gray-200': '#EBEDF3',
                'gray-300': '#E4E6EF',
                'gray-400': '#D1D3E0',
                'gray-500': '#B5B5C3',
                'gray-600': '#7E8299',
                'gray-700': '#5E6278',
                'gray-800': '#3F4254',
                'gray-900': '#181C32',
            },
        },
        fontFamily: 'Roboto',
    },
    // Base Settins
    self: {
        layout: 'default', // blank/default page mode
    },
    // Page loader
    pageLoader: {
        type: '', // default|spinner-message|spinner-logo
    },
    // Header
    header: {
        self: {
            display: true,
            width: 'fluid',
            theme: 'light',
            fixed: {
                desktop: true,
                mobile: true,
            },
        },
        menu: {
            self: {
                display: false,
                dynamic: true,
                layout: 'default',
                rootArrow: false,
                iconStyle: 'duotone', // duotone, line, bold, solid
            },
            desktop: {
                arrow: true,
                toggle: 'click',
                submenu: {
                    theme: 'light',
                    arrow: true,
                },
            },
            mobile: {
                submenu: {
                    theme: 'dark',
                    accordion: true,
                },
            },
        },
    },
    // Subheader
    subheader: {
        display: true,
        displayDesc: true,
        displayDaterangepicker: true,
        layoutVersion: 'v1',
        fixed: true,
        width: 'fluid',
        clear: false,
        style: 'solid', // transparent/solid
    },
    // Content
    content: {
        width: 'fixed', // fluid|fixed
    },
    // Brand
    brand: {
        self: {
            theme: 'dark', // light/dark
        },
    },
    // Aside
    aside: {
        self: {
            theme: 'dark',
            display: true,
            fixed: true,
            minimize: {
                toggle: true,
                default: false,
                hoverable: true, // allow hover
            },
        },
        footer: {
            self: {
                display: false,
            },
        },
        menu: {
            dynamic: true,
            dropdown: false,
            scroll: true,
            iconStyle: 'duotone',
            submenu: {
                accordion: true,
                dropdown: {
                    arrow: true,
                    hoverTimeout: 500, // in milliseconds
                },
            },
        },
    },
    // Footer
    footer: {
        display: true,
        width: 'fluid',
        fixed: true,
    },
    // Extras
    extras: {
        // Search
        search: {
            display: true,
            layout: 'dropdown',
            offcanvas: {
                direction: 'right',
            },
        },
        // Notifications
        notifications: {
            display: true,
            layout: 'dropdown',
            dropdown: {
                style: 'dark', // light|dark
            },
            offcanvas: {
                direction: 'right',
            },
        },
        // Quick Actionss
        quickActions: {
            display: true,
            layout: 'dropdown',
            dropdown: {
                style: 'dark', // light|dark
            },
            offcanvas: {
                direction: 'right',
            },
        },
        // User
        user: {
            display: true,
            layout: 'offcanvas',
            dropdown: {
                style: 'dark', // light|dark
            },
            offcanvas: {
                direction: 'right',
            },
        },
        // Languages
        languages: {
            display: true,
        },
        // Cart
        cart: {
            display: true,
            layout: 'dropdown',
            offcanvas: {
                direction: 'right',
            },
            dropdown: {
                style: 'dark', // light|dark
            },
        },
        // Chat
        chat: {
            display: true,
        },
        // Quick Panel
        quickPanel: {
            display: true,
            offcanvas: {
                direction: 'right',
            },
        },
        // Page Toolbar
        toolbar: {
            display: true,
        },
        // Scrolltop
        scrolltop: {
            display: true,
        },
    },
};


/***/ }),

/***/ 25309:
/*!****************************************************************!*\
  !*** ./src/app/_metronic/configs/dynamic-aside-menu.config.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicAsideMenuConfig": () => (/* binding */ DynamicAsideMenuConfig)
/* harmony export */ });
const DynamicAsideMenuConfig = {
    items: [
        {
            title: 'Dashboard',
            root: true,
            icon: 'flaticon-pie-chart-1',
            svg: './assets/media/svg/icons/Design/Layers.svg',
            page: '/dashboard/senior-lp-dashboard',
            bullet: 'dot',
            show: true,
            submenu: [
                {
                    title: 'Manager Dashboard',
                    page: '/dashboard/lp-manager-dashboard',
                },
                {
                    title: 'Lp Dashboard',
                    page: '/dashboard/lp-dashboard',
                },
            ]
        },
        {
            title: 'Calendar',
            root: true,
            icon: 'flaticon-calendar-1',
            svg: './assets/media/svg/icons/Design/Layers.svg',
            page: '/mycalendar',
            bullet: 'dot',
            show: true
        },
        {
            title: 'Opportunities',
            root: true,
            icon: 'flaticon-folder-1',
            svg: './assets/media/svg/icons/Design/Layers.svg',
            page: '/lead/lead-list',
            bullet: 'dot',
            show: true,
            submenu: [
                {
                    title: 'Opportunity',
                    page: '/lead/lead-list',
                },
                {
                    title: 'Opportunity Detail',
                    page: '/lead/lead-detail',
                    // submenu: [
                    //   {
                    //     title: 'FNA LPP',
                    //     page: '/fna/fna-detail',
                    //   },
                    //   {
                    //     title: 'FNA BPM',
                    //     page: '/fna/fna-bram',
                    //   }
                    // ]
                },
                {
                    title: 'FNA LPP',
                    page: '/fna/fna-detail',
                },
                {
                    title: 'FNA BPM',
                    page: '/fna/fna-bram',
                }
                // {
                //   title: 'FNA LPP',
                //   page: '/fna/fna-detail',
                // },
                // {
                //   title: 'FNA BPM',
                //   page: '/fna/fna-bram',
                // }
            ]
        },
        // {
        //   title: 'FNA',
        //   root: true,
        //   icon: 'flaticon-folder-4',
        //   svg: './assets/media/svg/icons/Design/wallet-passes-app-01.svg',
        //   page: '/fna/fna-list',
        //   bullet: 'dot',
        //   show: true,
        //   submenu: [
        //     {
        //       title: 'FNA List',
        //       page: '/fna/fna-list',
        //     },
        //     {
        //       title: 'FNA LPP',
        //       page: '/fna/fna-detail',
        //     },
        //     {
        //       title: 'FNA BPM',
        //       page: '/fna/fna-bram',
        //     },
        //   ]
        // },
        {
            title: 'Sales',
            root: true,
            icon: 'flaticon-cart',
            svg: './assets/media/svg/icons/Design/Layers.svg',
            page: '/sales/application/list',
            bullet: 'dot',
            show: true,
            submenu_show: true,
            submenu: [
                {
                    title: 'Quotation',
                    page: '/sales/quotation/list',
                    show: true
                },
                {
                    title: 'Application',
                    page: '/sales/application/list',
                    show: true
                },
                {
                    title: 'Sales Form',
                    page: '/product-form',
                },
                {
                    title: 'Sales Result',
                    page: '/resourse-detail',
                },
                {
                    title: 'Renewal Policies',
                    page: '/sales/renew-policy',
                },
                {
                    title: 'Renewal Policies Detail',
                    page: '/sales/renew-policy/detail',
                },
            ]
        },
        {
            title: 'Activity',
            root: true,
            icon: 'flaticon-clock-2',
            svg: './assets/media/svg/icons/Design/Layers.svg',
            page: '/activity/activity-management-list',
            bullet: 'dot',
            show: true,
            submenu: [
                {
                    title: 'Activity Form',
                    page: '/activity/activity-management-detail',
                },
                {
                    title: 'Activity List',
                    page: '/activity/activity-management-list',
                }
            ]
        },
        {
            title: 'Prospect Customer',
            root: true,
            icon: 'flaticon-profile-1',
            svg: './assets/media/svg/icons/Design/Layers.svg',
            page: '/customer/prospect-list',
            bullet: 'dot',
            show: true,
            submenu: [
                {
                    title: 'Prospect Customer',
                    page: '/customer/prospect-list',
                },
            ]
        },
        {
            title: 'Customer',
            root: true,
            icon: 'flaticon-profile-1',
            svg: './assets/media/svg/icons/Design/Layers.svg',
            page: '/customer/customer-list',
            bullet: 'dot',
            show: true,
            submenu: [
                {
                    title: 'Customer',
                    page: '/customer/customer-list',
                },
                {
                    title: 'Customer',
                    page: '/customer/customer-detail',
                }
            ]
        },
        {
            title: 'Product',
            root: true,
            icon: 'flaticon-open-box',
            svg: './assets/media/svg/icons/Design/Layers.svg',
            page: '/product/products-config/list',
            bullet: 'dot',
            show: true,
            submenu_show: true,
            submenu: [
                {
                    title: 'Product Definition​',
                    page: '/product/products-config/list',
                    show: true
                },
                {
                    title: 'Product Form',
                    page: '/product/products-config/detail',
                    show: false
                },
                {
                    title: 'Page groups',
                    page: '/product/page-group',
                    show: true,
                    submenu: [
                        {
                            title: 'Config Layout',
                            page: '/config-layout',
                        }
                    ]
                },
            ]
        },
        {
            title: 'Exchange  Rate',
            root: true,
            icon: 'flaticon-price-tag',
            svg: './assets/media/svg/icons/Design/Layers.svg',
            page: '/currency-exchange',
            bullet: 'dot',
            show: true,
        },
        {
            title: 'Reset Password',
            root: true,
            icon: 'flaticon-lock',
            svg: './assets/media/svg/icons/Design/Layers.svg',
            page: '/reset-password',
            bullet: 'dot',
            show: true,
        },
        {
            title: 'Setting',
            root: true,
            icon: 'flaticon-lock',
            svg: './assets/media/svg/icons/Design/Layers.svg',
            page: '/setting',
            bullet: 'dot',
            show: true,
            submenu_show: true,
            submenu: [
                {
                    title: 'Scheduler Jobs​',
                    page: '/re-rerun-job',
                    show: true
                },
            ]
        },
        {
            title: 'Report',
            root: true,
            icon: 'flaticon-line-graph',
            svg: './assets/media/svg/icons/Design/Layers.svg',
            page: 'report/report-detail-by-agent',
            bullet: 'dot',
            show: true,
            submenu_show: true,
            submenu: [
                {
                    title: 'Individual details production report',
                    page: '/report/report-detail-by-agent',
                    show: true
                },
                {
                    title: 'Branch details production report',
                    page: '/report/report-detail-by-bank-branch',
                    show: true
                },
                {
                    title: 'Production Summary - by channel',
                    page: '/report/report-channel-summary-by-bank-branch',
                    show: true
                },
                {
                    title: 'Monthly Branch Production Summary',
                    page: '/report/report-by-branch-summary-ai',
                    show: true
                },
                {
                    title: 'Monthly Product Sales by Channel',
                    page: '/report/report-by-product-sales-channel-policies',
                    show: true
                },
                // {
                //   title: '#By Product Sales Channel - Premium',
                //   page: '/report/report-by-product-sales-channel-premium',
                //   show: false
                // },
                {
                    title: 'By Product Branch - #of Policies',
                    page: '/report/report-by-product-branch-policies',
                    show: true
                },
                {
                    title: 'By Product Branch - #of Premium',
                    page: '/report/report-by-product-branch-premium',
                    show: true
                },
                {
                    title: 'Individual production summary',
                    page: '/report/report-by-agent-yearly',
                    show: true
                },
                {
                    title: 'Individual details activity report - daily',
                    page: '/report/report-by-agent-daily',
                    show: true
                },
                {
                    title: 'Individual details activity report - weekly',
                    page: '/report/report-by-agent-weekly',
                    show: true
                },
                {
                    title: 'Individual details activity report - monthly',
                    page: '/report/report-by-agent-monthly',
                    show: true
                },
                {
                    title: 'Monthly Activity Analysis',
                    page: '/report/report-monthly-sales-analysis-by-branch',
                    show: true
                },
                {
                    title: 'Weekly Activity Analysi',
                    page: '/report/report-weekly-sales-analysis-by-branch',
                    show: true
                },
                {
                    title: 'Daily Activity Analysis',
                    page: '/report/report-daily-sales-analysis-by-branch',
                    show: true
                },
                {
                    title: 'Key Driver Report',
                    page: '/report/report-key-driver',
                    show: true
                },
            ]
        },
        // {
        //   title: 'Page Group',
        //   root: true,
        //   icon: 'flaticon-folder-1 ',
        //   svg: './assets/media/svg/icons/Design/Layers.svg',
        //   page: '/page-group',
        //   bullet: 'dot',
        //   show: true
        // },
        // {
        //   title: 'Product Configuration',
        //   root: true,
        //   icon: 'flaticon2-architecture-and-city',
        //   svg: './assets/media/svg/icons/Design/Layers.svg',
        //   page: '/products-config/list',
        //   bullet: 'dot',
        //   show: true
        // },
        // {
        //   title: 'Config Form',
        //   root: true,
        //   icon: 'flaticon2-architecture-and-city',
        //   svg: './assets/media/svg/icons/Design/Layers.svg',
        //   page: '/config-layout',
        //   bullet: 'dot',
        //   show: false
        // },
        // {
        //   title: 'Quotation',
        //   root: true,
        //   icon: 'flaticon2-architecture-and-city',
        //   svg: './assets/media/svg/icons/Design/Layers.svg',
        //   page: '/quotation/list',
        //   bullet: 'dot',
        //   show: true
        // },
        // {
        //   title: 'Policy',
        //   root: true,
        //   icon: 'flaticon2-architecture-and-city',
        //   svg: './assets/media/svg/icons/Design/Layers.svg',
        //   page: '/policy/list',
        //   bullet: 'dot',
        //   show: true
        // },
        // {
        //   title: 'Activity Management List',
        //   root: true,
        //   icon: 'flaticon2-architecture-and-city',
        //   svg: './assets/media/svg/icons/Design/Layers.svg',
        //   page: '/activity-management-list',
        //   bullet: 'dot',
        //   show: true
        // },
        // {
        //   title: 'Currency Exchange',
        //   root: true,
        //   icon: 'flaticon2-architecture-and-city',
        //   svg: './assets/media/svg/icons/Design/Layers.svg',
        //   page: '/currency-exchange',
        //   bullet: 'dot',
        //   show: true
        // },
    ]
};


/***/ }),

/***/ 30614:
/*!*****************************************************************!*\
  !*** ./src/app/_metronic/configs/dynamic-header-menu.config.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicHeaderMenuConfig": () => (/* binding */ DynamicHeaderMenuConfig)
/* harmony export */ });
const DynamicHeaderMenuConfig = {
    items: [
        {
            title: 'Dashboards',
            root: true,
            alignment: 'left',
            page: '/dashboard',
        },
        {
            title: 'Builder',
            root: true,
            alignment: 'left',
            page: '/builder',
        },
        {
            title: 'Material UI',
            bullet: 'dot',
            page: '/material',
            icon: 'flaticon-interface-7',
            submenu: [
                {
                    title: 'Form Controls',
                    bullet: 'dot',
                    svg: './assets/media/svg/icons/Design/PenAndRuller.svg',
                    page: '/material/form-controls',
                    submenu: [
                        {
                            title: 'Auto Complete',
                            page: '/material/form-controls/autocomplete',
                            permission: 'accessToECommerceModule'
                        },
                        {
                            title: 'Checkbox',
                            page: '/material/form-controls/checkbox'
                        },
                        {
                            title: 'Radio Button',
                            page: '/material/form-controls/radiobutton'
                        },
                        {
                            title: 'Datepicker',
                            page: '/material/form-controls/datepicker'
                        },
                        {
                            title: 'Form Field',
                            page: '/material/form-controls/formfield'
                        },
                        {
                            title: 'Input',
                            page: '/material/form-controls/input'
                        },
                        {
                            title: 'Select',
                            page: '/material/form-controls/select'
                        },
                        {
                            title: 'Slider',
                            page: '/material/form-controls/slider'
                        },
                        {
                            title: 'Slider Toggle',
                            page: '/material/form-controls/slidertoggle'
                        }
                    ],
                },
                {
                    title: 'Navigation',
                    bullet: 'dot',
                    svg: './assets/media/svg/icons/Navigation/Up-down.svg',
                    page: '/material/navigation',
                    submenu: [
                        {
                            title: 'Menu',
                            page: '/material/navigation/menu'
                        },
                        {
                            title: 'Sidenav',
                            page: '/material/navigation/sidenav'
                        },
                        {
                            title: 'Toolbar',
                            page: '/material/navigation/toolbar'
                        }
                    ]
                },
                {
                    title: 'Layout',
                    bullet: 'dot',
                    svg: './assets/media/svg/icons/Layout/Layout-right-panel-2.svg',
                    page: '/material/layout',
                    submenu: [
                        {
                            title: 'Card',
                            page: '/material/layout/card'
                        },
                        {
                            title: 'Divider',
                            page: '/material/layout/divider'
                        },
                        {
                            title: 'Expansion panel',
                            page: '/material/layout/expansion-panel'
                        },
                        {
                            title: 'Grid list',
                            page: '/material/layout/grid-list'
                        },
                        {
                            title: 'List',
                            page: '/material/layout/list'
                        },
                        {
                            title: 'Tabs',
                            page: '/material/layout/tabs'
                        },
                        {
                            title: 'Stepper',
                            page: '/material/layout/stepper'
                        },
                        {
                            title: 'Tree',
                            page: '/material/layout/tree'
                        }
                    ]
                },
                {
                    title: 'Buttons & Indicators',
                    bullet: 'dot',
                    svg: './assets/media/svg/icons/Home/Cupboard.svg',
                    page: '/material/buttons-and-indicators',
                    submenu: [
                        {
                            title: 'Button',
                            page: '/material/buttons-and-indicators/button'
                        },
                        {
                            title: 'Button toggle',
                            page: '/material/buttons-and-indicators/button-toggle'
                        },
                        {
                            title: 'Chips',
                            page: '/material/buttons-and-indicators/chips'
                        },
                        {
                            title: 'Icon',
                            page: '/material/buttons-and-indicators/icon'
                        },
                        {
                            title: 'Progress bar',
                            page: '/material/buttons-and-indicators/progress-bar'
                        },
                        {
                            title: 'Progress spinner',
                            page: '/material/buttons-and-indicators/progress-spinner'
                        },
                        {
                            title: 'Ripples',
                            page: '/material/buttons-and-indicators/ripples'
                        }
                    ]
                },
                {
                    title: 'Popups & Modals',
                    bullet: 'dot',
                    svg: './assets/media/svg/icons/General/Duplicate.svg',
                    page: '/material/popups-and-modals',
                    submenu: [
                        {
                            title: 'Bottom sheet',
                            page: '/material/popups-and-modals/bottom-sheet'
                        },
                        {
                            title: 'Dialog',
                            page: '/material/popups-and-modals/dialog'
                        },
                        {
                            title: 'Snackbar',
                            page: '/material/popups-and-modals/snackbar'
                        },
                        {
                            title: 'Tooltip',
                            page: '/material/popups-and-modals/tooltip'
                        }
                    ]
                },
                {
                    title: 'Data table',
                    bullet: 'dot',
                    svg: './assets/media/svg/icons/Layout/Layout-top-panel-4.svg',
                    page: '/material/data-table',
                    submenu: [
                        {
                            title: 'Paginator',
                            page: '/material/data-table/paginator'
                        },
                        {
                            title: 'Sort header',
                            page: '/material/data-table/sort-header'
                        },
                        {
                            title: 'Table',
                            page: '/material/data-table/table'
                        }
                    ]
                }
            ]
        },
        {
            title: 'NgBootstrap',
            bullet: 'dot',
            icon: 'flaticon-web',
            page: '/ngbootstrap',
            mega: true,
            submenu: [
                {
                    title: 'A ... C',
                    submenu: [{
                            title: 'Accordion',
                            page: '/ngbootstrap/accordion'
                        },
                        {
                            title: 'Alert',
                            page: '/ngbootstrap/alert'
                        },
                        {
                            title: 'Buttons',
                            page: '/ngbootstrap/buttons'
                        },
                        {
                            title: 'Carousel',
                            page: '/ngbootstrap/carousel'
                        }]
                },
                {
                    title: 'C ... M',
                    submenu: [{
                            title: 'Collapse',
                            page: '/ngbootstrap/collapse'
                        },
                        {
                            title: 'Datepicker',
                            page: '/ngbootstrap/datepicker'
                        },
                        {
                            title: 'Dropdown',
                            page: '/ngbootstrap/dropdown'
                        },
                        {
                            title: 'Modal',
                            page: '/ngbootstrap/modal'
                        }]
                },
                {
                    title: 'P ... R',
                    submenu: [{
                            title: 'Pagination',
                            page: '/ngbootstrap/pagination'
                        },
                        {
                            title: 'Popover',
                            page: '/ngbootstrap/popover'
                        },
                        {
                            title: 'Progressbar',
                            page: '/ngbootstrap/progressbar'
                        },
                        {
                            title: 'Rating',
                            page: '/ngbootstrap/rating'
                        }]
                },
                {
                    title: 'T ... Z',
                    submenu: [
                        {
                            title: 'Timepicker',
                            page: '/ngbootstrap/timepicker'
                        },
                        {
                            title: 'Tooltips',
                            page: '/ngbootstrap/tooltip'
                        },
                        {
                            title: 'Typehead',
                            page: '/ngbootstrap/typehead'
                        }
                    ]
                }
            ]
        },
        {
            title: 'Custom',
            root: true,
            alignment: 'left',
            toggle: 'click',
            page: '',
            submenu: [
                {
                    title: 'eCommerce',
                    bullet: 'dot',
                    icon: 'flaticon-business',
                    permission: 'accessToECommerceModule',
                    page: '/ecommerce',
                    submenu: [
                        {
                            title: 'Customers',
                            page: '/ecommerce/customers'
                        },
                        {
                            title: 'Products',
                            page: '/ecommerce/products'
                        },
                    ]
                },
                {
                    title: 'User Management',
                    bullet: 'dot',
                    icon: 'flaticon-user',
                    page: '/user-management',
                    submenu: [
                        {
                            title: 'Users',
                            page: '/user-management/users'
                        },
                        {
                            title: 'Roles',
                            page: '/user-management/roles'
                        }
                    ]
                },
                {
                    title: 'Error Pages',
                    bullet: 'dot',
                    icon: 'flaticon2-list-2',
                    page: '/error',
                    submenu: [
                        {
                            title: 'Error 1',
                            page: '/error/error-1'
                        },
                        {
                            title: 'Error 2',
                            page: '/error/error-2'
                        },
                        {
                            title: 'Error 3',
                            page: '/error/error-3'
                        },
                        {
                            title: 'Error 4',
                            page: '/error/error-4'
                        },
                        {
                            title: 'Error 5',
                            page: '/error/error-5'
                        },
                        {
                            title: 'Error 6',
                            page: '/error/error-6'
                        },
                    ]
                },
                {
                    title: 'Wizards',
                    bullet: 'dot',
                    icon: 'flaticon2-mail-1',
                    page: '/wizards',
                    submenu: [
                        {
                            title: 'Wizard 1',
                            page: '/wizards/wizard-1'
                        },
                        {
                            title: 'Wizard 2',
                            page: '/wizards/wizard-2'
                        },
                        {
                            title: 'Wizard 3',
                            page: '/wizards/wizard-3'
                        },
                        {
                            title: 'Wizard 4',
                            page: '/wizards/wizard-4'
                        },
                    ]
                }
            ]
        }
    ]
};


/***/ }),

/***/ 967:
/*!***********************************************!*\
  !*** ./src/app/_metronic/core/core.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _pipes_first_letter_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipes/first-letter.pipe */ 7529);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes/safe.pipe */ 80326);
/* harmony import */ var _pipes_first_word_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes/first-word.pipe */ 98696);






let CoreModule = class CoreModule {
};
CoreModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_pipes_first_letter_pipe__WEBPACK_IMPORTED_MODULE_0__.FirstLetterPipe, _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_1__.SafePipe, _pipes_first_word_pipe__WEBPACK_IMPORTED_MODULE_2__.GetFirstWord],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
        exports: [_pipes_first_letter_pipe__WEBPACK_IMPORTED_MODULE_0__.FirstLetterPipe, _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_1__.SafePipe, _pipes_first_word_pipe__WEBPACK_IMPORTED_MODULE_2__.GetFirstWord],
    })
], CoreModule);



/***/ }),

/***/ 15818:
/*!*****************************************!*\
  !*** ./src/app/_metronic/core/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* reexport safe */ _core_module__WEBPACK_IMPORTED_MODULE_6__.CoreModule),
/* harmony export */   "CustomAdapter": () => (/* reexport safe */ _utils_date_picker_utils__WEBPACK_IMPORTED_MODULE_5__.CustomAdapter),
/* harmony export */   "CustomAdapter2": () => (/* reexport safe */ _utils_date_picker_utils__WEBPACK_IMPORTED_MODULE_5__.CustomAdapter2),
/* harmony export */   "CustomDateParserFormatter": () => (/* reexport safe */ _utils_date_picker_utils__WEBPACK_IMPORTED_MODULE_5__.CustomDateParserFormatter),
/* harmony export */   "DynamicAsideMenuService": () => (/* reexport safe */ _services_dynamic_aside_menu_service__WEBPACK_IMPORTED_MODULE_2__.DynamicAsideMenuService),
/* harmony export */   "DynamicHeaderMenuService": () => (/* reexport safe */ _services_dynamic_header_menu_service__WEBPACK_IMPORTED_MODULE_3__.DynamicHeaderMenuService),
/* harmony export */   "LayoutInitService": () => (/* reexport safe */ _services_layout_init_service__WEBPACK_IMPORTED_MODULE_1__.LayoutInitService),
/* harmony export */   "LayoutService": () => (/* reexport safe */ _services_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService),
/* harmony export */   "getDateFromString": () => (/* reexport safe */ _utils_types_convertion_utils__WEBPACK_IMPORTED_MODULE_4__.getDateFromString),
/* harmony export */   "toInteger": () => (/* reexport safe */ _utils_types_convertion_utils__WEBPACK_IMPORTED_MODULE_4__.toInteger)
/* harmony export */ });
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/layout.service */ 3070);
/* harmony import */ var _services_layout_init_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/layout-init.service */ 39768);
/* harmony import */ var _services_dynamic_aside_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/dynamic-aside-menu.service */ 96185);
/* harmony import */ var _services_dynamic_header_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/dynamic-header-menu.service */ 59026);
/* harmony import */ var _utils_types_convertion_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/types-convertion.utils */ 82243);
/* harmony import */ var _utils_date_picker_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/date-picker.utils */ 33620);
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core.module */ 967);
// Services




// Utils


// Module



/***/ }),

/***/ 7529:
/*!***********************************************************!*\
  !*** ./src/app/_metronic/core/pipes/first-letter.pipe.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirstLetterPipe": () => (/* binding */ FirstLetterPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);

// Angular

/**
 * Returns only first letter of string
 */
let FirstLetterPipe = class FirstLetterPipe {
    /**
     * Transform
     *
     * @param value: any
     * @param args: any
     */
    transform(value, args) {
        return value
            .split(' ')
            .map((n) => n[0])
            .join('');
    }
};
FirstLetterPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'firstLetter',
    })
], FirstLetterPipe);



/***/ }),

/***/ 98696:
/*!*********************************************************!*\
  !*** ./src/app/_metronic/core/pipes/first-word.pipe.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetFirstWord": () => (/* binding */ GetFirstWord)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let GetFirstWord = class GetFirstWord {
    transform(value) {
        if (value === null) {
            return "";
        }
        const firstWords = value.split(" ");
        return firstWords[0];
    }
};
GetFirstWord = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'firstWord'
    })
], GetFirstWord);



/***/ }),

/***/ 80326:
/*!***************************************************!*\
  !*** ./src/app/_metronic/core/pipes/safe.pipe.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafePipe": () => (/* binding */ SafePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 50318);

// Angular


/**
 * Sanitize HTML
 */
let SafePipe = class SafePipe {
    /**
     * Pipe Constructor
     *
     * @param _sanitizer: DomSanitezer
     */
    // tslint:disable-next-line
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    /**
     * Transform
     *
     * @param value: string
     * @param type: string
     */
    transform(value, type) {
        switch (type) {
            case 'html':
                return this._sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this._sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this._sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this._sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this._sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                return this._sanitizer.bypassSecurityTrustHtml(value);
        }
    }
};
SafePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.DomSanitizer }
];
SafePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
        name: 'safe',
    })
], SafePipe);



/***/ }),

/***/ 96185:
/*!***********************************************************************!*\
  !*** ./src/app/_metronic/core/services/dynamic-aside-menu.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicAsideMenuService": () => (/* binding */ DynamicAsideMenuService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _configs_dynamic_aside_menu_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../configs/dynamic-aside-menu.config */ 25309);




const emptyMenuConfig = {
    items: []
};
let DynamicAsideMenuService = class DynamicAsideMenuService {
    constructor() {
        this.menuConfigSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(emptyMenuConfig);
        this.menuConfig$ = this.menuConfigSubject.asObservable();
        this.loadMenu();
    }
    // Here you able to load your menu from server/data-base/localStorage
    // Default => from DynamicAsideMenuConfig
    loadMenu() {
        this.setMenu(_configs_dynamic_aside_menu_config__WEBPACK_IMPORTED_MODULE_0__.DynamicAsideMenuConfig);
    }
    setMenu(menuConfig) {
        this.menuConfigSubject.next(menuConfig);
    }
    getMenu() {
        return this.menuConfigSubject.value;
    }
};
DynamicAsideMenuService.ctorParameters = () => [];
DynamicAsideMenuService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], DynamicAsideMenuService);



/***/ }),

/***/ 59026:
/*!************************************************************************!*\
  !*** ./src/app/_metronic/core/services/dynamic-header-menu.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicHeaderMenuService": () => (/* binding */ DynamicHeaderMenuService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _configs_dynamic_header_menu_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../configs/dynamic-header-menu.config */ 30614);




const emptyMenuConfig = {
    items: []
};
let DynamicHeaderMenuService = class DynamicHeaderMenuService {
    constructor() {
        this.menuConfigSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(emptyMenuConfig);
        this.menuConfig$ = this.menuConfigSubject.asObservable();
        this.loadMenu();
    }
    // Here you able to load your menu from server/data-base/localeStorage
    // Default => from DynamicHeaderMenuConfig
    loadMenu() {
        this.setMenu(_configs_dynamic_header_menu_config__WEBPACK_IMPORTED_MODULE_0__.DynamicHeaderMenuConfig);
    }
    setMenu(menuConfig) {
        this.menuConfigSubject.next(menuConfig);
    }
    getMenu() {
        return this.menuConfigSubject.value;
    }
};
DynamicHeaderMenuService.ctorParameters = () => [];
DynamicHeaderMenuService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], DynamicHeaderMenuService);



/***/ }),

/***/ 39768:
/*!****************************************************************!*\
  !*** ./src/app/_metronic/core/services/layout-init.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutInitService": () => (/* binding */ LayoutInitService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.service */ 3070);



let LayoutInitService = class LayoutInitService {
    constructor(layout) {
        this.layout = layout;
    }
    init() {
        this.layout.initConfig();
        this.preInitLayout();
        // init base layout
        this.initLayout();
        this.initLoader();
        // init header and subheader menu
        this.initHeader();
        this.initSubheader();
        // init content
        this.initContent();
        // init aside and aside menu
        this.initAside();
        // init footer
        this.initFooter();
        this.initSkins();
    }
    // init base layout
    preInitLayout() {
        const config = this.layout.getConfig();
        const updatedConfig = Object.assign({}, config);
        const subheaderFixed = this.layout.getProp('subheader.fixed');
        const headerSelfFixedDesktop = this.layout.getProp('header.self.fixed.desktop');
        if (subheaderFixed && headerSelfFixedDesktop) {
            updatedConfig.subheader.style = 'solid';
        }
        else {
            updatedConfig.subheader.fixed = false;
        }
        this.layout.setConfigWithoutLocalStorageChanges(updatedConfig);
    }
    initLayout() {
        const selfBodyBackgroundImage = this.layout.getProp('self.body.background-image');
        if (selfBodyBackgroundImage) {
            document.body.style.backgroundImage = `url("${selfBodyBackgroundImage}")`;
        }
        const selfBodyClass = (this.layout.getProp('self.body.class') || '').toString();
        if (selfBodyClass) {
            const bodyClasses = selfBodyClass.split(' ');
            bodyClasses.forEach((cssClass) => document.body.classList.add(cssClass));
        }
    }
    initLoader() { }
    // init header and subheader menu
    initHeader() {
        // Fixed header
        const headerSelfFixedDesktop = this.layout.getProp('header.self.fixed.desktop');
        if (headerSelfFixedDesktop) {
            document.body.classList.add('header-fixed');
            this.layout.setCSSClass('header', 'header-fixed');
        }
        else {
            document.body.classList.add('header-static');
        }
        const headerSelfFixedMobile = this.layout.getProp('header.self.fixed.mobile');
        if (headerSelfFixedMobile) {
            document.body.classList.add('header-mobile-fixed');
            this.layout.setCSSClass('header_mobile', 'header-mobile-fixed');
        }
        // Menu
        const headerMenuSelfDisplay = this.layout.getProp('header.menu.self.display');
        const headerMenuSelfLayout = this.layout.getProp('header.menu.self.layout');
        if (headerMenuSelfDisplay) {
            this.layout.setCSSClass('header_menu', `header-menu-layout-${headerMenuSelfLayout}`);
            if (this.layout.getProp('header.menu.self.rootArrow')) {
                this.layout.setCSSClass('header_menu', 'header-menu-root-arrow');
            }
        }
        if (this.layout.getProp('header.self.width') === 'fluid') {
            this.layout.setCSSClass('header_container', 'container-fluid');
        }
        else {
            this.layout.setCSSClass('header_container', 'container');
        }
    }
    initSubheader() {
        const subheaderDisplay = this.layout.getProp('subheader.display');
        if (subheaderDisplay) {
            document.body.classList.add('subheader-enabled');
        }
        else {
            return;
        }
        // Fixed content head
        const subheaderFixed = this.layout.getProp('subheader.fixed');
        const headerSelfFixedDesktop = this.layout.getProp('header.self.fixed.desktop');
        if (subheaderFixed && headerSelfFixedDesktop) {
            document.body.classList.add('subheader-fixed');
        }
        const subheaderStyle = this.layout.getProp('subheader.style');
        if (subheaderStyle) {
            this.layout.setCSSClass('subheader', `subheader-${subheaderStyle}`);
        }
        if (this.layout.getProp('subheader.width') === 'fluid') {
            this.layout.setCSSClass('subheader_container', 'container-fluid');
        }
        else {
            this.layout.setCSSClass('subheader_container', 'container');
        }
        if (this.layout.getProp('subheader.clear')) {
            this.layout.setCSSClass('subheader', 'mb-0');
        }
    }
    // init content
    initContent() {
        if (this.layout.getProp('content.fit-top')) {
            this.layout.setCSSClass('content', 'pt-0');
        }
        if (this.layout.getProp('content.fit-bottom')) {
            this.layout.setCSSClass('content', 'pb-0');
        }
        if (this.layout.getProp('content.width') === 'fluid') {
            this.layout.setCSSClass('content_container', 'container-fluid');
        }
        else {
            this.layout.setCSSClass('content_container', 'container');
        }
    }
    // init aside and aside menu
    initAside() {
        if (this.layout.getProp('aside.self.display') !== true) {
            return;
        }
        // Enable Aside
        document.body.classList.add('aside-enabled');
        // Fixed Aside
        if (this.layout.getProp('aside.self.fixed')) {
            document.body.classList.add('aside-fixed');
            this.layout.setCSSClass('aside', 'aside-fixed');
        }
        else {
            document.body.classList.add('aside-static');
        }
        // Check Aside
        if (this.layout.getProp('aside.self.display') !== true) {
            return;
        }
        // Default fixed
        if (this.layout.getProp('aside.self.minimize.default')) {
            document.body.classList.add('aside-minimize');
        }
        if (this.layout.getProp('aside.self.minimize.hoverable')) {
            document.body.classList.add('aside-minimize-hoverable');
        }
        // Menu
        // Dropdown Submenu
        const asideMenuDropdown = this.layout.getProp('aside.menu.dropdown');
        if (asideMenuDropdown) {
            this.layout.setCSSClass('aside_menu', 'aside-menu-dropdown');
            this.layout.setHTMLAttribute('aside_menu', 'data-menu-dropdown', '1');
        }
        // Scrollable Menu
        if (asideMenuDropdown !== true) {
            this.layout.setHTMLAttribute('aside_menu', 'data-menu-scroll', '1');
        }
        else {
            this.layout.setHTMLAttribute('aside_menu', 'data-menu-scroll', '0');
        }
        const asideMenuSubmenuDropdownHoverTimout = this.layout.getProp('aside.menu.submenu.dropdown.hoverTimeout');
        if (asideMenuSubmenuDropdownHoverTimout) {
            this.layout.setHTMLAttribute('aside_menu', 'data-menu-dropdown-timeout', asideMenuSubmenuDropdownHoverTimout);
        }
    }
    // init footer
    initFooter() {
        // Fixed header
        if (this.layout.getProp('footer.fixed') === true) {
            document.body.classList.add('footer-fixed');
        }
        if (this.layout.getProp('footer.width') === 'fluid') {
            this.layout.setCSSClass('footer_container', 'container-fluid');
        }
        else {
            this.layout.setCSSClass('footer_container', 'container');
        }
    }
    /**
     * Set the body class name based on page skin options
     */
    initSkins() {
        const headerSelfTheme = this.layout.getProp('header.self.theme') || '';
        const brandSelfTheme = this.layout.getProp('brand.self.theme') || '';
        const asideSelfDisplay = this.layout.getProp('aside.self.display');
        if (asideSelfDisplay === false) {
            document.body.classList.add(`brand-${headerSelfTheme}`);
        }
        else {
            document.body.classList.add(`brand-${brandSelfTheme}`);
        }
    }
};
LayoutInitService.ctorParameters = () => [
    { type: _layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService }
];
LayoutInitService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], LayoutInitService);



/***/ }),

/***/ 3070:
/*!***********************************************************!*\
  !*** ./src/app/_metronic/core/services/layout.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutService": () => (/* binding */ LayoutService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _configs_default_layout_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../configs/default-layout.config */ 68328);
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! object-path */ 68526);
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(object_path__WEBPACK_IMPORTED_MODULE_2__);






const LAYOUT_CONFIG_LOCAL_STORAGE_KEY = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appVersion}-layoutConfig`;
let LayoutService = class LayoutService {
    constructor() {
        this.layoutConfigSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(undefined);
        // scope list of css classes
        this.classes = {
            header: [],
            header_container: [],
            header_mobile: [],
            header_menu: [],
            aside_menu: [],
            subheader: [],
            subheader_container: [],
            content: [],
            content_container: [],
            footer_container: [],
        };
        // scope list of html attributes
        this.attrs = {
            aside_menu: {},
        };
    }
    initConfig() {
        const configFromLocalStorage = localStorage.getItem(LAYOUT_CONFIG_LOCAL_STORAGE_KEY);
        if (configFromLocalStorage) {
            try {
                this.layoutConfigSubject.next(JSON.parse(configFromLocalStorage));
                return;
            }
            catch (error) {
                this.removeConfig();
                console.error('config parse from local storage', error);
            }
        }
        this.layoutConfigSubject.next(_configs_default_layout_config__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutConfig);
    }
    removeConfig() {
        localStorage.removeItem(LAYOUT_CONFIG_LOCAL_STORAGE_KEY);
    }
    refreshConfigToDefault() {
        this.setConfigWithPageRefresh(undefined);
    }
    getConfig() {
        const config = this.layoutConfigSubject.value;
        if (!config) {
            return _configs_default_layout_config__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutConfig;
        }
        return config;
    }
    setConfig(config) {
        if (!config) {
            this.removeConfig();
        }
        else {
            localStorage.setItem(LAYOUT_CONFIG_LOCAL_STORAGE_KEY, JSON.stringify(config));
        }
        this.layoutConfigSubject.next(config);
    }
    setConfigWithoutLocalStorageChanges(config) {
        this.layoutConfigSubject.next(config);
    }
    setConfigWithPageRefresh(config) {
        this.setConfig(config);
        document.location.reload();
    }
    getProp(path) {
        return object_path__WEBPACK_IMPORTED_MODULE_2__.get(this.layoutConfigSubject.value, path);
    }
    setCSSClass(path, classesInStr) {
        const cssClasses = this.classes[path];
        if (!cssClasses) {
            this.classes[path] = [];
        }
        classesInStr
            .split(' ')
            .forEach((cssClass) => this.classes[path].push(cssClass));
    }
    getCSSClasses(path) {
        const cssClasses = this.classes[path];
        if (!cssClasses) {
            return [];
        }
        return cssClasses;
    }
    getStringCSSClasses(path) {
        return this.getCSSClasses(path).join(' ');
    }
    getHTMLAttributes(path) {
        const attributesObj = this.attrs[path];
        if (!attributesObj) {
            return {};
        }
        return attributesObj;
    }
    setHTMLAttribute(path, attrKey, attrValue) {
        const attributesObj = this.attrs[path];
        if (!attributesObj) {
            this.attrs[path] = {};
        }
        this.attrs[path][attrKey] = attrValue;
    }
};
LayoutService.ctorParameters = () => [];
LayoutService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root',
    })
], LayoutService);



/***/ }),

/***/ 33620:
/*!***********************************************************!*\
  !*** ./src/app/_metronic/core/utils/date-picker.utils.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomAdapter": () => (/* binding */ CustomAdapter),
/* harmony export */   "CustomAdapter2": () => (/* binding */ CustomAdapter2),
/* harmony export */   "CustomDateParserFormatter": () => (/* binding */ CustomDateParserFormatter)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);



/**
 * This Service handles how the date is represented in scripts i.e. ngModel.
 */
let CustomAdapter = class CustomAdapter extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__.NgbDateAdapter {
    constructor() {
        super(...arguments);
        this.DELIMITER = '-';
    }
    fromModel(value) {
        if (value) {
            const date = value.split(this.DELIMITER);
            return {
                month: parseInt(date[1], 10),
                day: parseInt(date[2], 10),
                year: parseInt(date[0], 10)
            };
        }
        return null;
    }
    toModel(date) {
        return date ? date.year + this.DELIMITER + ("0" + date.month).substr(-2) + this.DELIMITER + ("0" + date.day).substr(-2) : null;
    }
};
CustomAdapter = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], CustomAdapter);

/**
 * This Service handles how the date is represented in scripts i.e. ngModel.
 */
let CustomAdapter2 = class CustomAdapter2 extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__.NgbDateAdapter {
    constructor() {
        super(...arguments);
        this.DELIMITER = '/';
    }
    fromModel(value) {
        if (value) {
            const date = value.split(this.DELIMITER);
            return {
                month: parseInt(date[1], 10),
                day: parseInt(date[0], 10),
                year: parseInt(date[2], 10)
            };
        }
        return null;
    }
    toModel(date) {
        return date ? ("0" + date.day).substr(-2) + this.DELIMITER + ("0" + date.month).substr(-2) + this.DELIMITER + date.year : null;
    }
};
CustomAdapter2 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], CustomAdapter2);

/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
let CustomDateParserFormatter = class CustomDateParserFormatter extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__.NgbDateParserFormatter {
    constructor() {
        super(...arguments);
        this.DELIMITER = '/';
    }
    parse(value) {
        if (value) {
            const date = value.split(this.DELIMITER);
            return {
                month: parseInt(date[1], 10),
                day: parseInt(date[0], 10),
                year: parseInt(date[2], 10)
            };
        }
        return null;
    }
    format(date) {
        return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
    }
};
CustomDateParserFormatter = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], CustomDateParserFormatter);



/***/ }),

/***/ 82243:
/*!****************************************************************!*\
  !*** ./src/app/_metronic/core/utils/types-convertion.utils.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDateFromString": () => (/* binding */ getDateFromString),
/* harmony export */   "toInteger": () => (/* binding */ toInteger)
/* harmony export */ });
/**
 * Convert string to Date
 *
 * @param dateInStr: string (format => 'MM/dd/yyyy')
 */
function getDateFromString(dateInStr = '') {
    if (dateInStr && dateInStr.length > 0) {
        const dateParts = dateInStr.trim().split('/');
        const year = toInteger(dateParts[2]);
        const month = toInteger(dateParts[0]);
        const day = toInteger(dateParts[1]);
        // tslint:disable-next-line:prefer-const
        let result = new Date();
        result.setDate(day);
        result.setMonth(month - 1);
        result.setFullYear(year);
        return result;
    }
    return new Date();
}
/**
 * Covert value to number
 *
 * @param value: any
 */
function toInteger(value) {
    return parseInt(`${value}`, 10);
}


/***/ }),

/***/ 61106:
/*!************************************************!*\
  !*** ./src/app/pages/policy/policy.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicyService": () => (/* binding */ PolicyService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/biz.operation.service */ 38313);






const API_QUOTATION_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}/policy`;
let PolicyService = class PolicyService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_2__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_QUOTATION_URL);
        this.httpClient = httpClient;
    }
    getPolicyList(search = {}) {
        let url = API_QUOTATION_URL + "?";
        let team = search.isTeam ? true : false;
        url = url + "isTeam=" + team + "&";
        if (search.startDate) {
            url = url + "startDate=" + moment__WEBPACK_IMPORTED_MODULE_0__(search.startDate).format("YYYY-MM-DD") + "&";
        }
        if (search.endDate) {
            url = url + "endDate=" + moment__WEBPACK_IMPORTED_MODULE_0__(search.endDate).format("YYYY-MM-DD") + "&";
        }
        return this.httpClient.get(url);
    }
    updateAttachment(resId, attId) {
        return this.httpClient.put(API_QUOTATION_URL + "/attachment", { attachmentId: attId + "", policyNo: resId });
    }
    submitPolicy(resId) {
        return this.httpClient.put(API_QUOTATION_URL + "/status/submit/" + resId, {});
    }
};
PolicyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
PolicyService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], PolicyService);



/***/ }),

/***/ 78680:
/*!******************************************************************!*\
  !*** ./src/app/pages/products/services/products-data.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDataService": () => (/* binding */ ProductDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/biz.operation.service */ 38313);





const API_PRODUCT_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/product`;
let ProductDataService = class ProductDataService extends _core_biz_operation_service__WEBPACK_IMPORTED_MODULE_1__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_PRODUCT_URL);
        this.httpClient = httpClient;
        this.referenceID = null;
        this.creatingLeadId = "0";
        this.referenceStatus = null;
    }
    getAll() {
        return this.httpClient.get(API_PRODUCT_URL + "-view");
    }
};
ProductDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
ProductDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], ProductDataService);



/***/ }),

/***/ 68526:
/*!*******************************************!*\
  !*** ./node_modules/object-path/index.js ***!
  \*******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  'use strict'

  /*istanbul ignore next:cant test*/
  if ( true && typeof module.exports === 'object') {
    module.exports = factory()
  } else if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else {}
})(this, function () {
  'use strict'

  var toStr = Object.prototype.toString

  function hasOwnProperty (obj, prop) {
    if (obj == null) {
      return false
    }
    //to handle objects with null prototypes (too edge case?)
    return Object.prototype.hasOwnProperty.call(obj, prop)
  }

  function isEmpty (value) {
    if (!value) {
      return true
    }
    if (isArray(value) && value.length === 0) {
      return true
    } else if (typeof value !== 'string') {
      for (var i in value) {
        if (hasOwnProperty(value, i)) {
          return false
        }
      }
      return true
    }
    return false
  }

  function toString (type) {
    return toStr.call(type)
  }

  function isObject (obj) {
    return typeof obj === 'object' && toString(obj) === '[object Object]'
  }

  var isArray = Array.isArray || function (obj) {
    /*istanbul ignore next:cant test*/
    return toStr.call(obj) === '[object Array]'
  }

  function isBoolean (obj) {
    return typeof obj === 'boolean' || toString(obj) === '[object Boolean]'
  }

  function getKey (key) {
    var intKey = parseInt(key)
    if (intKey.toString() === key) {
      return intKey
    }
    return key
  }

  function factory (options) {
    options = options || {}

    var objectPath = function (obj) {
      return Object.keys(objectPath).reduce(function (proxy, prop) {
        if (prop === 'create') {
          return proxy
        }

        /*istanbul ignore else*/
        if (typeof objectPath[prop] === 'function') {
          proxy[prop] = objectPath[prop].bind(objectPath, obj)
        }

        return proxy
      }, {})
    }

    var hasShallowProperty
    if (options.includeInheritedProps) {
      hasShallowProperty = function () {
        return true
      }
    } else {
      hasShallowProperty = function (obj, prop) {
        return (typeof prop === 'number' && Array.isArray(obj)) || hasOwnProperty(obj, prop)
      }
    }

    function getShallowProperty (obj, prop) {
      if (hasShallowProperty(obj, prop)) {
        return obj[prop]
      }
    }

    var getShallowPropertySafely
    if (options.includeInheritedProps) {
      getShallowPropertySafely = function (obj, currentPath) {
        if (typeof currentPath !== 'string' && typeof currentPath !== 'number') {
          currentPath = String(currentPath)
        }
        var currentValue = getShallowProperty(obj, currentPath)
        if (currentPath === '__proto__' || currentPath === 'prototype' ||
          (currentPath === 'constructor' && typeof currentValue === 'function')) {
          throw new Error('For security reasons, object\'s magic properties cannot be set')
        }
        return currentValue
      }
    } else {
      getShallowPropertySafely = function (obj, currentPath) {
        return getShallowProperty(obj, currentPath)
      }
    }

    function set (obj, path, value, doNotReplace) {
      if (typeof path === 'number') {
        path = [path]
      }
      if (!path || path.length === 0) {
        return obj
      }
      if (typeof path === 'string') {
        return set(obj, path.split('.').map(getKey), value, doNotReplace)
      }
      var currentPath = path[0]
      var currentValue = getShallowPropertySafely(obj, currentPath)
      if (path.length === 1) {
        if (currentValue === void 0 || !doNotReplace) {
          obj[currentPath] = value
        }
        return currentValue
      }

      if (currentValue === void 0) {
        //check if we assume an array
        if (typeof path[1] === 'number') {
          obj[currentPath] = []
        } else {
          obj[currentPath] = {}
        }
      }

      return set(obj[currentPath], path.slice(1), value, doNotReplace)
    }

    objectPath.has = function (obj, path) {
      if (typeof path === 'number') {
        path = [path]
      } else if (typeof path === 'string') {
        path = path.split('.')
      }

      if (!path || path.length === 0) {
        return !!obj
      }

      for (var i = 0; i < path.length; i++) {
        var j = getKey(path[i])

        if ((typeof j === 'number' && isArray(obj) && j < obj.length) ||
          (options.includeInheritedProps ? (j in Object(obj)) : hasOwnProperty(obj, j))) {
          obj = obj[j]
        } else {
          return false
        }
      }

      return true
    }

    objectPath.ensureExists = function (obj, path, value) {
      return set(obj, path, value, true)
    }

    objectPath.set = function (obj, path, value, doNotReplace) {
      return set(obj, path, value, doNotReplace)
    }

    objectPath.insert = function (obj, path, value, at) {
      var arr = objectPath.get(obj, path)
      at = ~~at
      if (!isArray(arr)) {
        arr = []
        objectPath.set(obj, path, arr)
      }
      arr.splice(at, 0, value)
    }

    objectPath.empty = function (obj, path) {
      if (isEmpty(path)) {
        return void 0
      }
      if (obj == null) {
        return void 0
      }

      var value, i
      if (!(value = objectPath.get(obj, path))) {
        return void 0
      }

      if (typeof value === 'string') {
        return objectPath.set(obj, path, '')
      } else if (isBoolean(value)) {
        return objectPath.set(obj, path, false)
      } else if (typeof value === 'number') {
        return objectPath.set(obj, path, 0)
      } else if (isArray(value)) {
        value.length = 0
      } else if (isObject(value)) {
        for (i in value) {
          if (hasShallowProperty(value, i)) {
            delete value[i]
          }
        }
      } else {
        return objectPath.set(obj, path, null)
      }
    }

    objectPath.push = function (obj, path /*, values */) {
      var arr = objectPath.get(obj, path)
      if (!isArray(arr)) {
        arr = []
        objectPath.set(obj, path, arr)
      }

      arr.push.apply(arr, Array.prototype.slice.call(arguments, 2))
    }

    objectPath.coalesce = function (obj, paths, defaultValue) {
      var value

      for (var i = 0, len = paths.length; i < len; i++) {
        if ((value = objectPath.get(obj, paths[i])) !== void 0) {
          return value
        }
      }

      return defaultValue
    }

    objectPath.get = function (obj, path, defaultValue) {
      if (typeof path === 'number') {
        path = [path]
      }
      if (!path || path.length === 0) {
        return obj
      }
      if (obj == null) {
        return defaultValue
      }
      if (typeof path === 'string') {
        return objectPath.get(obj, path.split('.'), defaultValue)
      }

      var currentPath = getKey(path[0])
      var nextObj = getShallowPropertySafely(obj, currentPath)
      if (nextObj === void 0) {
        return defaultValue
      }

      if (path.length === 1) {
        return nextObj
      }

      return objectPath.get(obj[currentPath], path.slice(1), defaultValue)
    }

    objectPath.del = function del (obj, path) {
      if (typeof path === 'number') {
        path = [path]
      }

      if (obj == null) {
        return obj
      }

      if (isEmpty(path)) {
        return obj
      }
      if (typeof path === 'string') {
        return objectPath.del(obj, path.split('.'))
      }

      var currentPath = getKey(path[0])
      getShallowPropertySafely(obj, currentPath)
      if (!hasShallowProperty(obj, currentPath)) {
        return obj
      }

      if (path.length === 1) {
        if (isArray(obj)) {
          obj.splice(currentPath, 1)
        } else {
          delete obj[currentPath]
        }
      } else {
        return objectPath.del(obj[currentPath], path.slice(1))
      }

      return obj
    }

    return objectPath
  }

  var mod = factory()
  mod.create = factory
  mod.withInheritedProps = factory({includeInheritedProps: true})
  return mod
})


/***/ })

}]);
//# sourceMappingURL=default-src_app__metronic_core_index_ts-src_app_pages_policy_policy_service_ts-src_app_pages_-b29154.js.map