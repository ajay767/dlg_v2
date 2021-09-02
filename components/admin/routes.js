const UpcomingFeature = () => {
  return (
    <div className="upcoming__feature__section">
      <img src="/assets/images/upcoming_feature.png" alt="Upcoming feature" />
    </div>
  );
};

const routes = {
  list: [
    { title: 'events', path: '/admin/event', component: UpcomingFeature },
    { title: 'blogging', path: '/admin/blogging', component: UpcomingFeature },
    {
      title: 'recruitments',
      path: '/admin/recruitment',
      component: UpcomingFeature,
    },
    {
      title: 'academics',
      path: '/admin/academics',
      component: UpcomingFeature,
    },
    { title: 'notice', path: '/admin/notice', component: UpcomingFeature },
    { title: 'workshops', path: '/admin/workshop', component: UpcomingFeature },
  ],
};

const adminRoutes = {
  events: {
    path: '/admin/event',
    navbar: [
      { title: 'All', path: '/admin/event' },
      { title: 'Add', path: '/admin/event/add' },
      { title: 'Update', path: '/admin/event/update' },
    ],
  },
  academics: {
    path: '/admin/academics',
    navbar: [
      { title: 'Add', path: '/admin/academics' },
      { title: 'Update', path: '/admin/academics/update' },
    ],
  },
};

export default adminRoutes;
