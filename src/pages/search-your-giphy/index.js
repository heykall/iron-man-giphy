import React, { useState, useEffect } from 'react';
import { fetchSearch, setLoading } from "../../store/actions/actionCreator"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from 'react-hook-form'

const SearchYourGiphy = () => {
  const [gifs, setGifs] = useState([])
  const dispatch = useDispatch()
  const searchValue = useSelector((state => state.searchReducer.search))
  const error = useSelector((state) => state.ironManReducer.error)
  
  useEffect(() => {
    dispatch(setLoading(true))
  },[dispatch]);
  
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (search) => {
    dispatch(fetchSearch(search));
    setGifs(searchValue)
  };


  if (error) {
    return <h1>ERROR ...</h1>
  }
  return (
    <>
      <section className="text-blueGray-700">
        <div className="container flex flex-col px-5 py-4 sm:py-6 mx-auto items-center justify-center">
          <div className="flex flex-col w-full mb-4 text-center">
            <h1 className="mb-4 text-xl font-bold tracking-tighter text-title-default sm:text-3xl title-font">
              SEARCH YOUR GIPHY
            </h1>
          </div>
        </div>
      </section>

      <form onSubmit={(handleSubmit)(onSubmit)} className="flex items-start w-full lg:mx-auto lg:justify-center lg:w-1/2">
          <input
            type="text"
            name="keywords"
            placeholder="Search Giphy"
            className="flex-grow w-full px-4 py-2 mb-4 mr-4 text-base border-4 text-black transition duration-650 ease-in-out transform  0 sm:mb-0 focus:shadow-outline"
            {...register("keywords", { required: true })}
          />
          <button
            className="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-red-300 rounded-lg hover:bg-red-500 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
            type="submit"
          >
            Search
          </button>
        </form>

      <section className="text-blueGray-700 ">
            <div className="container items-center px-5 py-4 mx-auto lg:px-24">
              <div className="flex flex-wrap mb-12 text-left">
                {gifs.length
                ? 
                gifs.map((gif, index) => (
                  <div className="mx-auto w-1/3" key={index}>
                      <div className="p-4">
                        {<img className="object-fit rounded-md object-center w-40 h-24 sm:w-full mb-4 lg:h-48 xl:h-30  2xl:h-48 md:h-36" src={gif} alt="gif"/>}
                      </div>
                    </div>
                ))
                :
                <>
                  </>
              }        
              </div>
            </div>
          </section>
    </>
  )
}

export default SearchYourGiphy