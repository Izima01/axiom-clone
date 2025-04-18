type NavMenuArrayType = {
  name: string;
  link: string;
  children?: NavMenuArrayType[];
};

export const mobileNavMenuArray: NavMenuArrayType[] = [
  {
    name: 'Home',
    link: '',
    children: [
      {
        name: 'SEO Company',
        link: '/',
      },
      {
        name: 'Marketing Agency',
        link: '/',
      },
      {
        name: 'Creative Agency',
        link: '/',
      },
      {
        name: 'Advertising Agency',
        link: '/',
      },
    ],
  },
  {
    name: 'Pages',
    link: '',
    children: [
      {
        name: 'About',
        link: '/',
        children: [
          {
            name: 'About - Agency',
            link: '/',
          },
          {
            name: 'About - Personal',
            link: '/',
          },
        ],
      },
      {
        name: 'Services',
        link: '/',
        children: [
          {
            name: 'Services - Agency',
            link: '/',
          },
          {
            name: 'Services - Personal',
            link: '/',
          },
        ],
      },
      {
        name: 'Our Team',
        link: '/',
      },
      {
        name: 'FAQ',
        link: '/',
      },
      {
        name: 'Pricing',
        link: '/',
      },
      {
        name: 'Tools',
        link: '/',
        children: [
          {
            name: 'Typography',
            link: '/',
          },
          {
            name: 'Shortcodes',
            link: '/',
          },
          {
            name: '404',
            link: '/',
          },
          {
            name: 'Service Plus',
            link: '/',
          },
          {
            name: 'Newsletter Popup',
            link: '/',
          },
        ],
      },
    ],
  },
  {
    name: 'Portfolio',
    link: '',
    children: [
      {
        name: 'Portfolio 1',
        link: '/',
      },
      {
        name: 'Portfolio 2',
        link: '/',
      },
      {
        name: 'Portfolio 3',
        link: '/',
      },
      {
        name: 'Portfolio 4',
        link: '/',
      },
      {
        name: 'Portfolio 5',
        link: '/',
      },
      {
        name: 'Portfolio 6',
        link: '/',
      },
      {
        name: 'Single Portfolio',
        link: '',
        children: [
          {
            name: 'Style 1',
            link: '/',
          },
          {
            name: 'Style 2',
            link: '/',
          },
          {
            name: 'Style 3',
            link: '/',
          },
          {
            name: 'Style 4',
            link: '/',
          },
          {
            name: 'Style 5',
            link: '/',
          },
        ],
      },
    ],
  },
  {
    name: 'Blog',
    link: '',
    children: [
      {
        name: 'Blog Styles 1',
        link: '',
        children: [
          {
            name: 'Blog Standard',
            link: '/',
          },
          {
            name: 'Blog List',
            link: '/',
          },
          {
            name: 'Masonry 2 Columns',
            link: '/',
          },
          {
            name: 'Masonry 3 Columns',
            link: '/',
          },
          {
            name: 'Masonry 4 Columns',
            link: '/',
          },
        ],
      },
      {
        name: 'Blog Styles 2',
        link: '',
        children: [
          {
            name: 'Blog Grid 3 Columns',
            link: '/',
          },
          {
            name: 'Blog Grid 4 Columns',
            link: '/',
          },
          {
            name: 'Blog Portfolio 3 Columns',
            link: '/',
          },
          {
            name: 'Blog Portfolio 4 Columns',
            link: '/',
          },
        ],
      },
      {
        name: 'Single Post',
        link: '',
        children: [
          {
            name: 'Style 1',
            link: '/',
          },
          {
            name: 'Style 2',
            link: '/',
          },
          {
            name: 'Style 3',
            link: '/',
          },
          {
            name: 'Video Post',
            link: '/',
          },
          {
            name: 'Audio Post',
            link: '/',
          },
          {
            name: 'With Sidebar',
            link: '/',
          },
        ],
      },
    ],
  },
  {
    name: 'Contact',
    link: '/',
  },
];
