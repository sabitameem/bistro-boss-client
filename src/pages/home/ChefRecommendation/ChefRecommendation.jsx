import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ChefRecommendation = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"Should Try"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>

      {/* card */}
      <div className="grid md:grid-cols-3 mb-12 gap-8">
        {/* card no 1 */}
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-1-370x247.jpg"
              alt="soup"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="font-semibold uppercase text-gray-900">Haddock</h2>
            <p>Haddock fillets ,Salt,Pepper,Lemon juice,Olive oil or butter</p>
            <div className="mx-auto">
              <button className="bg-gray-100 px-2 py-2 rounded-md text-yellow-500 border-2  border-t-gray-100 border-r-gray-100 border-l-gray-100 border-b-yellow-500 uppercase">add to cart</button>
            </div>
          </div>
        </div>
        {/* card no 2 */}
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-8-370x247.jpg"
              alt="soup"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="font-semibold uppercase text-gray-900">Breton Fish Stew</h2>
            <p>Firm white fish fillets ,Salt,Onion,garlic,Fish stock or vegetable broth,white whine</p>
            <div className="mx-auto">
              <button className="bg-gray-800 px-2 py-2 rounded-md text-yellow-500 border-2  border-t-gray-800 border-r-gray-800 border-l-gray-800 border-b-yellow-500 uppercase">add to cart</button>
            </div>
          </div>
        </div>
        {/* card no 3 */}
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-4-370x247.jpg"
              alt="soup"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="font-semibold uppercase text-gray-900">Roast Duck Breast</h2>
            <p>2 duck breasts,Salt,Pepper,Herbs and spices,Olive oil or duck fat</p>
            <div className="mx-auto">
              <button className="bg-gray-100 px-2 py-2 rounded-md text-yellow-500 border-2  border-t-gray-100 border-r-gray-100 border-l-gray-100 border-b-yellow-500 uppercase">add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecommendation;
