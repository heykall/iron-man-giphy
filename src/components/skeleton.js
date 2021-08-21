import React from 'react';
import Skeleton from 'react-loading-skeleton'

const SkeletonComponent = () => {

  return (
    <>
      {
        [...Array(9)].map((skel) => {
          return <div className="mx-auto w-1/3" key={skel}>
                        <div className="p-4">
                          <Skeleton duration={2} className="object-fit rounded-md object-center w-40 h-24 sm:w-full mb-4 lg:h-48 xl:h-30  2xl:h-48 md:h-36" />
                        </div>
                      </div>
        })
      }
    </>
  )
}

export default SkeletonComponent
