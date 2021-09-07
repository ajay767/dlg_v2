function AdminContent({ children, className }) {
  return (
    <div className={`admin__panel--content-main flex-1 ${className}`}>
      {children}
    </div>
  );
}

export default AdminContent;
