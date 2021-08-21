import React, { useEffect } from 'react'
import { fetchIronMan, setLoading } from "../../store/actions/actionCreator"
import { useDispatch, useSelector } from "react-redux"
import SkeletonComponent from '../../components/skeleton'

const IronManGiphy = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLoading(true))
    dispatch(fetchIronMan())
  }, [dispatch]);

  const ironMan = useSelector((state) => state.ironManReducer.ironMan)
  const loading = useSelector((state) => state.ironManReducer.loading)
  const error = useSelector((state) => state.ironManReducer.error)

if (error) {
    return <h1>ERROR ...</h1>
  }
  return (
    <>
      <section className="text-blueGray-700">
        <div className="container flex flex-col px-5 py-6 sm:py-12 mx-auto items-center justify-center">
          <div className="flex flex-col w-full mb-4 text-center">
            <h1 className="mb-4 text-xl font-bold tracking-tighter text-title-default sm:text-3xl title-font">
              IRON MAN GIPHY
            </h1>
          </div>
        </div>
      </section>
      <section className="text-blueGray-700 ">
        <div className="container items-center px-5 py-4 mx-auto lg:px-24">
          <div className="flex flex-wrap mb-12 text-left">
            {loading
            ? 
              <SkeletonComponent/>
            :
            ironMan.map((gif, index) => (
              <div className="mx-auto w-1/3" key={index}>
                  <div className="p-4">
                    {<img className="object-fit rounded-md object-center w-40 h-24 sm:w-full mb-4 lg:h-48 xl:h-30  2xl:h-48 md:h-36" src={gif} alt="gif"/>}
                  </div>
                </div>
            ))
          }        
          </div>
        </div>
      </section>
    </>
  )
}

export default IronManGiphy