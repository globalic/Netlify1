const GridItem = () => (
  <div>
    <a
      href="#"
      className="relative block h-48 overflow-hidden bg-gray-100 rounded-lg shadow dark:bg-gray-800 xl:h-64"
    >
      <img
        alt="Morbi varius posuere blandit."
        loading=""
        src="https://images.unsplash.com/photo-1620219655493-67707a0127bb?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        className="w-full h-full object-cover"
      />
    </a>
  </div>
);

export const ExampleGrids = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 pt-4 pb-10">
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
        Grid components
      </h3>
      <p className="mt-4 text-gray-500 dark:text-gray-400">
        Morbi varius posuere blandit. Praesent gravida bibendum neque eget
        commodo.
      </p>
      <div className="grid gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
      </div>
    </section>
  );
};
