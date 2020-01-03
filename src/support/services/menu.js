export const getMenuData = [
  {
    category: true,
    title: 'Dashboards'
  },
  {
    title: 'Dashboards',
    key: 'dashboards',
    icon: 'fe fe-home',
    count: 6,
    children: [
      {
        title: 'Analytics',
        key: 'dashboardAnalytics',
        url: '/dashboard/analytics'
      },
      {
        title: 'Statistics',
        key: 'dashboardStatistics',
        url: '/dashboard/statistics'
      },
      {
        title: 'Ecommerce',
        key: 'dashboardEcommerce',
        url: '/dashboard/ecommerce'
      },
      {
        title: 'Crypto',
        key: 'dashboardCrypto',
        url: '/dashboard/crypto'
      },
      {
        title: 'Crypto Terminal',
        key: 'dashboardCryptoTerminal',
        url: '/dashboard/crypto-terminal'
      },
      {
        title: 'Jira',
        key: 'dashboardJira',
        url: '/dashboard/jira'
      },
      {
        title: 'Helpdesk',
        key: 'dashboardHelpdesk',
        url: '/dashboard/helpdesk'
      }
    ]
  },
  {
    category: true,
    title: 'Apps & Pages'
  },
  {
    title: 'System Pages',
    key: 'system',
    icon: 'fe fe-user',
    children: [
      {
        title: 'Login',
        key: 'systemLogin',
        url: '/system/login'
      },
      {
        title: 'Forgot Password',
        key: 'systemForgotPassword',
        url: '/system/forgot-password'
      },
      {
        title: 'Register',
        key: 'systemRegister',
        url: '/system/register'
      },
      {
        title: 'Lockscreen',
        key: 'systemLockscreen',
        url: '/system/lockscreen'
      },
      {
        title: 'Page 404',
        key: 'system404',
        url: '/system/404'
      },
      {
        title: 'Page 500',
        key: 'system500',
        url: '/system/500'
      }
    ]
  },
  {
    title: 'Ecommerce',
    key: 'ecommerce',
    icon: 'fe fe-shopping-cart',
    children: [
      {
        title: 'Dashboard',
        key: 'ecommerceDashboard',
        url: '/ecommerce/dashboard'
      },
      {
        title: 'Orders',
        key: 'ecommerceOrders',
        url: '/ecommerce/orders'
      },
      {
        title: 'Propduct Catalog',
        key: 'ecommerceProductCatalog',
        url: '/ecommerce/product-catalog'
      },
      {
        title: 'Product Details',
        key: 'ecommerceProductDetails',
        url: '/ecommerce/product-details'
      },
      {
        title: 'Cart',
        key: 'ecommerceCart',
        url: '/ecommerce/cart'
      }
    ]
  }
]
