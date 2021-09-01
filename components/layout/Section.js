function Section({ children, className, ...props }) {
  return (
    <div
      className={`${className} p-2 px-3 lg:p-0 lg:px-0 w-full md:w-11/12 xl:w-10/12 mx-auto`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Section;
