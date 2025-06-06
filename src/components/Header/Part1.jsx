import Logo from './Logo';
import React, { useContext } from 'react';
import { Context } from '../../../Context/Context';
import Director from '../../../public/photos/image.png';

const Part1 = () => {
  const { college } = useContext(Context);

  return (
    <div id="part1" className="bg-white border-b border-gray-200 py-2 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center justify-center w-full md:w-auto">
             <div className="flex-shrink-0">
              <Logo name={college.college_name} />
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-semibold text-black">Sri. G. Ganesh Kumar, I.A.S.,</p>
                <p className="text-xs text-gray-600">Director of Technical Education</p>
              </div>
              <div className="w-24 h-24 border-2 border-red-600 overflow-hidden">
                <img
                  src={Director}
                  alt="Director"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;