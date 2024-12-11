const AddProduct = () => {
  //name, description, img, category, price
  return (
    <div className="min-h-dvh flex flex-col sm:justify-center items-center">
      <h1 className="font-iceberg text-2xl text-rose-500 my-8">
        Add your product
      </h1>
      <form className="rounded shadow-xl p-5 space-y-2 w-4/5 sm:w-1/2">
        <div className=" grid sm:grid-cols-3 ">
          <label htmlFor="name" className="font-bold font-playfair">
            Product Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border border-rose-500 p-1 col-span-2 rounded-md"
          />
        </div>
        <div className=" grid sm:grid-cols-3 ">
          <label htmlFor="description"
          className="font-bold font-playfair"
          >Description:</label>
          <textarea
            id="description"
            name="description"
            className="w-full border border-rose-500 p-1 col-span-2 rounded-md"
          ></textarea>
        </div>
        <div className=" grid sm:grid-cols-3 ">
          <label htmlFor="category"
          className="font-bold font-playfair">Category:</label>
          <select
            id="category"
            name="category"
            className="w-full border border-rose-500 p-1 col-span-2 rounded-md"
          >
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home</option>
            <option value="beauty">Beauty</option>
            <option value="sports">Sports</option>
            <option value="automotive">Automotive</option>
            <option value="toys">Toys</option>
            <option value="books">Books</option>
            <option value="health">Health</option>
            <option value="groceries">Groceries</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className=" grid sm:grid-cols-3">
          <label htmlFor="price"
          className="font-bold font-playfair"
          >Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            step="0.01"
            className="w-full border border-rose-500 p-1 col-span-2 rounded-md"
          />
        </div>
        <div className=" grid sm:grid-cols-3">
          <label htmlFor="image"
          className="font-bold font-playfair"
          >Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="w-full border-2 border-dashed border-rose-500 p-1 col-span-2 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-cyan-500 p-1 font-iceberg text-white transition hover:bg-cyan-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
