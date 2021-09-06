const UpcomingFeature = () => {
  return (
    <div className="upcoming__feature__section">
      <img src="/assets/images/upcoming_feature.png" alt="Upcoming feature" />
    </div>
  );
};

const adminRoutes = {
  events: {
    path: "/admin/event",
    navbar: [
      { title: "All", path: "/admin/event" },
      { title: "Add", path: "/admin/event/add" },
      { title: "Update", path: "/admin/event/update" },
    ],
  },
  academics: {
    path: "/admin/academics",
    navbar: [
      { title: "Add", path: "/admin/academics" },
      { title: "Update", path: "/admin/academics/update" },
    ],
  },
  blogging: {
    path: "/admin/blogging",
    navbar: [
      { title: "Create", path: "/admin/blogging/create" },
      { title: "Preview", path: "/admin/blogging/preview" },
    ],
  },
};

export default adminRoutes;
