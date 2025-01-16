import { StockProps } from "@/types";

interface FormStockProps {
  handleSubmit: (e: { preventDefault: () => void }) => void;
  handleChange: (e: {
    target: {
      name: string;
      value: string | number;
    };
  }) => void;
  formData: StockProps;
}

const AddStocksForm = (props: FormStockProps) => {
  const { handleSubmit, handleChange, formData } = props;
  return (
    <form
      onSubmit={handleSubmit}
      className='bg-white rounded-lg p-6 max-w-5xl mx-auto mb-10 grid'
    >
      <h2 className='text-2xl font-semibold text-gray-700 mb-6 text-center'>
        Add New Stock
      </h2>

      <div className='block md:flex'>
        <div className='mb-3 mr-3'>
          <label
            htmlFor='company name'
            className='block text-gray-700 font-medium mb-2'
          >
            Company Name
          </label>
          <input
            className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-950'
            type='text'
            name='companyName'
            value={formData.companyName}
            onChange={handleChange}
            placeholder='Apple'
            required
          />
        </div>
        <div className='mb-3 mr-3'>
          <label
            htmlFor='stock symbol'
            className='block text-gray-700 font-medium mb-2'
          >
            Stock Symbol
          </label>
          <input
            className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-950'
            type='text'
            name='stockSymbol'
            value={formData.stockSymbol}
            onChange={handleChange}
            placeholder='AAPL'
            required
          />
        </div>
        <div className='mb-3 mr-3'>
          <label
            htmlFor='price'
            className='block text-gray-700 font-medium mb-2'
          >
            Price
          </label>
          <input
            className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-950'
            type='number'
            name='price'
            value={formData.price}
            onChange={handleChange}
            placeholder='$150.25'
            required
          />
        </div>
        <div className='mb-3 mr-3'>
          <label
            htmlFor='change'
            className='block text-gray-700 font-medium mb-2'
          >
            Change
          </label>
          <input
            className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-950'
            type='number'
            name='change'
            value={formData.change}
            onChange={handleChange}
            placeholder=' -$1.30'
            required
          />
        </div>
        <div className='mb-3 mr-3'>
          <label
            htmlFor='percentage change'
            className='block text-gray-700 font-medium mb-2'
          >
            Percentage Change
          </label>
          <input
            className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-950'
            type='number'
            name='percentageChange'
            value={formData.percentageChange}
            onChange={handleChange}
            placeholder=' -0.8%'
            required
          />
        </div>
      </div>

      <button
        type='submit'
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4'
      >
        Add Stock
      </button>
    </form>
  );
};

export default AddStocksForm;
