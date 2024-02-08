export const Container = ({ children }) => {
  return (
    <div className="container max-w-screen-xl mx-auto flex flex-col gap-24">
      {children}
    </div>
  );
};
