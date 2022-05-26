export const DynamicAsideMenuConfig = {
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
          title: 'Renewal Policies',
          page: '/sale/renew-policy',
          show: true,
          submenu_show: false,
          submenu: [
            {
              title: 'Renewal Policies Detail',
              page: '/sale/renew-policy/detail',
              show: false
            },
          ]
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
