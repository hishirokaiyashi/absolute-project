import clsx from 'clsx';

const AppHeader = () => {
  // const ctx: IAppContext = useContext(AppContext) as IAppContext;
  const clsHeaderDefault =
    'transition-all relative top-0 left-0 z-50 p-5 w-screen';
  return (
    <header id="header" className={clsx(clsHeaderDefault)}>
      <div className={`transition-all grid grid-cols-12 gap-4items-center`}>
        <div className="col-span-4">Header</div>
      </div>
    </header>
  );
};

export default AppHeader;
