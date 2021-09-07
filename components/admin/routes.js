const UpcomingFeature = () => {
  return (
    <div className="upcoming__feature__section">
      <img src="/assets/images/upcoming_feature.png" alt="Upcoming feature" />
    </div>
  );
};

const adminRoutes = {
  events: {
    path: '/admin/event',
    access: ['super'],
    navbar: [
      { title: 'All', path: '/admin/event' },
      { title: 'Add', path: '/admin/event/add' },
      { title: 'Update', path: '/admin/event/update' },
    ],
  },
  academics: {
    path: '/admin/academics',
    access: ['super'],
    navbar: [
      { title: 'Add', path: '/admin/academics' },
      { title: 'Update', path: '/admin/academics/update' },
    ],
  },
  blogging: {
    path: '/admin/blogging',
    access: ['admin', 'super'],
    navbar: [
      { title: 'Create', path: '/admin/blogging/create' },
      { title: 'Preview', path: '/admin/blogging/preview' },
    ],
  },
  setting: {
    path: '/admin/setting',
    access: ['admin', 'super'],
  },
};

export default adminRoutes;
