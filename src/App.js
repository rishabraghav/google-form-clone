import './App.css';
import Select from 'react-select';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

function App() {
  const { getRootProps, getInputProps } = useDropzone();
  const customStyles = {
    control: (provided) => ({
      ...provided,
      minHeight: '48px',
      width: '170px' // Adjust this value to increase the height
    }),
  };

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];



  const [rating, setRating] = useState(3);
  const [mcqOption, setMCQOption] = useState('');
  const [checkboxOption, setCheckboxOption] = useState([]);
  const [shortAnswer, setShortAnswer] = useState('');
  const [paragraph, setParagraph] = useState('');
  const [dropdownOption, setDropdownOption] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [linearScale, setLinearScale] = useState('');

  // const handleRatingChange = (value) => {
  //   setRating(value);
  // };

  const handleMCQChange = (event) => {
    setMCQOption(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckboxOption((prevOptions) => [...prevOptions, value]);
    } else {
      setCheckboxOption((prevOptions) => prevOptions.filter((option) => option !== value));
    }
  };

  const handleShortAnswerChange = (event) => {
    setShortAnswer(event.target.value);
  };

  const handleParagraphChange = (event) => {
    setParagraph(event.target.value);
  };

  const handleDropdownChange = (selectedOption) => {
    setDropdownOption(selectedOption);
  };

  const handleFileDrop = (acceptedFiles) => {
    setUploadedFiles(acceptedFiles);
  };

  const handleLinearScaleChange = (event, value) => {
    setRating(value);
    setLinearScale(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const responses = {
      rating,
      mcqOption,
      checkboxOption,
      shortAnswer,
      paragraph,
      dropdownOption,
      uploadedFiles,
      linearScale,
    };
    alert("answers submitted, check console");
    console.log('Form submitted with responses:', responses);
  };

  return (
    <div className="App h-full  flex justify-center">
      <main className='h-full w-1/2 max-sm:w-full max-lg:w-full max-lg:p-3 max-sm:p-3 my-4' >
        <form className='space-y-4' onSubmit={handleSubmit}>
          <section className='rounded-lg bg-white border'>
            <div className='h-2 bg-tertiary rounded-t-lg'></div>
            <div className='p-4'>
              <h1 className='text-4xl flex p-1'>Assignment Task</h1>
            </div>
            <div className='flex p-4 flex-col items-start border'>
              <div className='w-full flex justify-between h-10'>
                <p className='h-fit text-sm font-bold text-slate-600'>rishabhraghav2012@gmail.com <span className='text-blue-500 font-normal'>Switch account</span></p>
                <div className='flex items-start justify-center'>
                  <img width="30" height="30" src="https://img.icons8.com/sf-black/64/737373/cloud-checked.png" alt="cloud-checked" />
                </div>
              </div>
              <p className='flex text-left p-0 text-slate-500 text-sm font-semibold'>The name and photo associated with your Google account will be recorded when you upload files and submit this form. Your email is not part of your response.</p>
            </div>
            <div className='p-4 flex'>
              <p className='text-red-500 m-1'>* Indicates required question</p>
            </div>
          </section>
          <section className='bg-white rounded-lg border flex flex-col items-start p-5 space-y-4'>
            <div className='font-medium'>MCQ <span className='text-red-500'>*</span></div>
            <div className="mcq-container flex flex-col space-y-4">
              <label className="mcq-option flex text-md items-center justify-center space-x-4">
                <input required type="radio" name="mcq" onChange={handleMCQChange} className="mcq-input bg-tertiary w-5 h-5" />
                <span className="bg-tertiary mcq-circle"></span>
                Option 1
              </label>

              <label className="mcq-option flex text-md items-center justify-center space-x-4">
                <input required type="radio" name="mcq" onChange={handleMCQChange} className="mcq-input bg-tertiary w-5 h-5" />
                <span className="bg-tertiary mcq-circle"></span>
                Option 2
              </label>

              <label className="mcq-option flex text-md items-center justify-center space-x-4">
                <input required type="radio" name="mcq" onChange={handleMCQChange} className="mcq-input bg-tertiary w-5 h-5" />
                <span className="bg-tertiary mcq-circle"></span>
                Option 3
              </label>
            </div>
          </section>
          <section className='bg-white rounded-lg border flex flex-col items-start p-5 space-y-4'>
            <div className='font-medium'>Checkbox <span className='text-red-500'>*</span></div>
            <div className="mcq-container flex flex-col space-y-4" required>
              <label className="mcq-option flex text-md items-center justify-center space-x-4">
                <input  type="checkbox" name="mcq" onChange={handleCheckboxChange} className="mcq-input bg-tertiary w-5 h-5" />
                <span className="bg-tertiary mcq-circle"></span>
                Option 1
              </label>

              <label className="mcq-option flex text-md items-center justify-center space-x-4">
                <input  type="checkbox" name="mcq" onChange={handleCheckboxChange} className="mcq-input bg-tertiary w-5 h-5" />
                <span className="bg-tertiary mcq-circle"></span>
                Option 2
              </label>

              <label className="mcq-option flex text-md items-center justify-center space-x-4">
                <input  type="checkbox" name="mcq" onChange={handleCheckboxChange} className="mcq-input bg-tertiary w-5 h-5" />
                <span className="bg-tertiary mcq-circle"></span>
                Option 3
              </label>
            </div>
          </section>
          <section className='bg-white rounded-lg border flex flex-col items-start p-5 space-y-4'>
            <p>Short Answer <span className='text-red-500'>*</span></p>
            <input required type='text' onChange={handleShortAnswerChange} placeholder="Your Answer" className='border outline-none border-b-1 border-t-0 border-x-0' />
          </section>
          <section className='bg-white rounded-lg border flex flex-col items-start p-5 space-y-4'>
            <p>ParaGraph <span className='text-red-500'>*</span></p>
            <textarea onChange={handleParagraphChange} type='text' data-rows="1" tabIndex="0" style={{ minHeight: "24px", height: "auto" }} placeholder="Your Answer" className='border outline-none border-b-1 border-t-0 border-x-0 w-full' />
          </section>
          <section className='bg-white rounded-lg border flex flex-col items-start p-5 space-y-4'>
            <p>Dropdown <span className='text-red-500'>*</span></p>
            <Select onChange={handleDropdownChange} options={options} placeholder='Choose' styles={customStyles} />
          </section>
          <section className='bg-white rounded-lg border p-5 space-y-4 flex flex-col'>
            <p className='flex'>File Upload <span className='text-red-500'>*</span></p>
            <div  {...getRootProps()} className='flex items-center justify-center p-4 border border-gray-300 rounded-lg cursor-pointer'>
              <input {...getInputProps()} onChange={handleFileDrop} />
              Drag 'n' drop files here, or click to select files
            </div>
          </section>
          <section className='bg-white rounded-lg border p-10 space-y-4 flex flex-col'>
            <p className='flex'>Linear Scale <span className='text-red-500'>*</span></p>
            <div className='flex items-end space-x-4 justify-evenly'>
              <p>Worst</p>
              {[1, 2, 3, 4, 5].map((value) => (
                <label key={value} className='flex items-center cursor-pointer flex-col justify-center'>
                  {value}
                  <input
                    type='radio'
                    name='rating'
                    value={value}
                    checked={rating === value}
                    onChange={() => { handleLinearScaleChange(value) }}
                    className='m-2'
                    required
                  />
                </label>
              ))}
              <p>Best</p>
            </div>
          </section>
          <section className='bg-white rounded-lg border p-5 flex flex-col'>
            <p className='flex my-2 mb-10'>Multi-Choice Grid <span className='text-red-500 ml-1'>*</span></p>
            <table className='border-collapse w-full'>
              <thead>
                <tr>
                  <th></th>
                  <th>Column 1</th>
                  <th>Column 2</th>
                  <th>Column 3</th>
                </tr>
              </thead>
              <tbody>
                <tr className='h-12 rounded-md bg-slate-50'>
                  <td>Row 1</td>
                  <td>
                    <label className='radio-option'>
                      <input required type='radio' name='row-1' />
                    </label>
                  </td>
                  <td>
                    <label className='radio-option'>
                      <input required type='radio' name='row-1' />
                    </label>
                  </td>
                  <td>
                    <label className='radio-option'>
                      <input required type='radio' name='row-1' />
                    </label>
                  </td>
                </tr>
                <tr className='h-4 bg-white'></tr>
                <tr className='h-12 rounded-md bg-slate-50 '>
                  <td>Row 2</td>
                  <td>
                    <label className='radio-option'>
                      <input required type='radio' name='row-2' />
                    </label>
                  </td>
                  <td>
                    <label className='radio-option'>
                      <input required type='radio' name='row-2' />
                    </label>
                  </td>
                  <td>
                    <label className='radio-option'>
                      <input required type='radio' name='row-2' />
                    </label>
                  </td>
                </tr>
                <tr className='h-4 bg-white'></tr>
                <tr className='h-12 rounded-md bg-slate-50 '>
                  <td>Row 3</td>
                  <td>
                    <label className='radio-option'>
                      <input required type='radio' name='row-3' />
                    </label>
                  </td>
                  <td>
                    <label className='radio-option'>
                      <input required type='radio' name='row-3' />
                    </label>
                  </td>
                  <td>
                    <label className='radio-option'>
                      <input required type='radio' name='row-3' />
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className='bg-white rounded-lg border p-5 flex flex-col'>
            <p className='flex my-2 mb-10'>Checkbox Grid <span className='ml-1 text-red-500'>*</span></p>
            <table className='border-collapse w-full'>
              <thead>
                <tr>
                  <th></th>
                  <th>Column 1</th>
                  <th>Column 2</th>
                  <th>Column 3</th>
                </tr>
              </thead>
              <tbody required>
                <tr className='h-12 rounded-md bg-slate-50 '>
                  <td>Row 1</td>
                  <td>
                    <label className='checkbox-option'>
                      <input  type='checkbox' />
                      <span></span>
                    </label>
                  </td>
                  <td>
                    <label className='checkbox-option'>
                      <input  type='checkbox' />
                      <span></span>
                    </label>
                  </td>
                  <td>
                    <label className='checkbox-option'>
                      <input  type='checkbox' />
                      <span></span>
                    </label>
                  </td>
                </tr>
                <tr className='h-4 bg-white'></tr>
                <tr className='h-12 rounded-md bg-slate-50 '>
                  <td>Row 2</td>
                  <td>
                    <label className='checkbox-option'>
                      <input  type='checkbox' />
                      <span></span>
                    </label>
                  </td>
                  <td>
                    <label className='checkbox-option'>
                      <input  type='checkbox' />
                      <span></span>
                    </label>
                  </td>
                  <td>
                    <label className='checkbox-option'>
                      <input  type='checkbox' />
                      <span></span>
                    </label>
                  </td>
                </tr>
                <tr className='h-4 bg-white'></tr>
                <tr className='h-12 rounded-md bg-slate-50 '>
                  <td>Row 3</td>
                  <td>
                    <label className='checkbox-option'>
                      <input  type='checkbox' />
                      <span></span>
                    </label>
                  </td>
                  <td>
                    <label className='checkbox-option'>
                      <input  type='checkbox' />
                      <span></span>
                    </label>
                  </td>
                  <td>
                    <label className='checkbox-option'>
                      <input  type='checkbox' />
                      <span></span>
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className='space-y-4'>
            <div className='flex justify-between w-full'>
              <button type='submit' className='bg-tertiary text-white px-6 py-2 rounded-md text-sm'>Submit</button>
              <div className='flex justify-between items-center'>
                <div className='w-52 max-sm:w-28 bg-green-600 h-3 rounded-full mr-4'></div>
                <p className=''>Page 1 of 1</p>
              </div>

              <p className='text-tertiary'>Clear form</p>
            </div>
            <p className='text-left text-sm text-slate-600'>Never submit passwords through Google Forms.</p>
            <p className='text-sm text-slate-600'>This content is neither created nor endorsed by Google. Report Abuse - Terms of Service - Privacy Policy</p>
            <p className='text-2xl text-slate-500 p-4'><span className='text-slate-600'>Google</span> Forms</p>
          </section>
        </form>
      </main>
    </div>
  );
}

export default App;
