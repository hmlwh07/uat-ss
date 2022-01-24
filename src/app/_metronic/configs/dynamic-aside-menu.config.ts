export const DynamicAsideMenuConfig = {
  items: [
    {
      title: 'Dashboard',
      root: true,
      icon: 'flaticon-pie-chart-1',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      page: '/dashboard',
      bullet: 'dot',
      show: true,

    },
    {
      title: 'Calendar',
      root: true,
      icon: 'flaticon-calendar-1',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      page: '/calendar',
      bullet: 'dot',
      show: true
    },
    {
      title: 'Leads',
      root: true,
      icon: 'flaticon-folder-1',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      page: '/lead/lead-list',
      bullet: 'dot',
      show: true,
      submenu: [
        {
          title: 'Lead',
          page: '/lead/lead-list',
        },
        {
          title: 'Lead Detail',
          page: '/lead/lead-detail',
          submenu: [
            {
              title: 'FNA LPP',
              page: '/fna/fna-detail',
            },
            {
              title: 'FNA BRAM',
              page: '/fna/fna-bram',
            }
          ]
        }
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
    //       title: 'FNA BRAM',
    //       page: '/fna/fna-bram',
    //     },
    //   ]
    // },
    {
      title: 'Sales',
      root: true,
      icon: 'flaticon-cart',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      page: '/sale/application/list',
      bullet: 'dot',
      show: true,
      submenu_show: true,
      submenu: [
        {
          title: 'Quotation',
          page: '/sale/quotation/list',
          show: true
        },
        {
          title: 'Application',
          page: '/sale/application/list',
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
      title: 'Report',
      root: true,
      icon: 'flaticon-line-graph',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      page: '/report',
      bullet: 'dot',
      show: true
    },
    {
      title: 'Setting',
      root: true,
      icon: 'flaticon-cogwheel-1',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      page: '/report',
      bullet: 'dot',
      show: true
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
