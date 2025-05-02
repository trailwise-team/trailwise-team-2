

import React from 'react';
import { Input } from '@/components/ui/input';
import {
  Compass,
  Heart,
  Plus,
} from 'lucide-react';
import { Button } from "@/components/ui/button"

// Placeholder image URLs (replace with actual URLs)
const whiteRocksTrailImage = 'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_1524,q_75,w_1524/v1/crm/cumberland/80-f78105005056a36_f781061d-5056-a36a-0b0e6fd3b6c6c957.jpg';
const hawkRockTrailImage = 'https://myhikes.org/images_uploads/Hawk%20Rock%20via%20Appalachian%20Trail%2FIMG_3532_20231124234626UTC.jpg';
const giffordPinchotImage = 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/2f/36/c9/photo2jpg.jpg?w=1200&h=-1&s=1';

const SavedParksPage = () => {
  return (
    <div className="flex flex-col min-h-screen p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Saved Parks</h1>
      <Input
        type="text"
        placeholder="Search parks..."
        className="mb-6 w-full"
      />
      <div className="max-h-[300px] overflow-y-auto">
        <div className='bg-black rounded-lg p-6 flex mb-4 relative'>
          <div className='flex flex-col w-1/2 pb-4'>
            <h2 className="text-white font-semibold">White Rocks Trail</h2>
            <p className="text-white leading-relaxed ">
              Allows for: <span className="text-gray-300">Hiking, Campfires (specific areas), Camping (shelter)</span>
            </p>
          </div>
          <img
            src={whiteRocksTrailImage}
            alt="White Rocks Trail"
            className="absolute top-4 right-4 w-24 h-24 rounded-md object-cover bottom-4"
          />
        </div>
        <div className='bg-black rounded-lg p-6 flex mb-4 relative'>
          <div className='flex flex-col w-1/2 pb-4'>
            <h2 className="text-white font-semibold">Hawk Rock Trail</h2>
            <p className="text-white leading-relaxed ">
              Allows for: <span className="text-gray-300">Hiking, Campfires (specific areas), Camping (shelter)</span>
            </p>
          </div>
          <img
            src={hawkRockTrailImage}
            alt="Hawk Rock Trail"
            className="absolute top-4 right-4 w-24 h-24 rounded-md object-cover bottom-4"
          />
        </div>
        <div className='bg-black rounded-lg p-6 flex mb-8 relative'>
          <div className='flex flex-col w-1/2 pb-4'>
            <h2 className="text-white font-semibold">Gifford Pinchot State Park</h2>
            <p className="text-white leading-relaxed ">
              Allows for: <span className="text-gray-300">Hiking, Campfires (specific areas), Camping (sites)</span>
            </p>
          </div>
          <img
            src={giffordPinchotImage}
            alt="Gifford Pinchot State Park"
            className="absolute top-4 right-4 w-24 h-24 rounded-md object-cover bottom-4"
          />
        </div>
      </div>
      <hr className="my-4 border-gray-400 border-2" />
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Filters</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        <Button variant="secondary">Horse Trail</Button>
        <Button variant="secondary">Hiking</Button>
        <Button variant="secondary">Camping</Button>
        <Button variant="secondary">Campfires</Button>
        <Button variant="secondary">Backpacking</Button>
        <Button variant="secondary">Biking</Button>
      </div>
      <div className="bg-black text-white py-4 flex justify-around items-center">
        <div className="flex flex-col items-center">
          <Compass className="w-6 h-6 mb-1" />
          <div>Explore</div>
        </div>
        <div className="flex flex-col items-center text-blue-500">
          <Heart className="w-6 h-6 mb-1 " />
          <div>Saved</div>
        </div>
        <div className="flex flex-col items-center">
          <Plus className="w-6 h-6 mb-1" />
          <div>Add Park</div>
        </div>
      </div>
      <footer className="text-center text-gray-500 py-4">
        Trailwise copyright 2025
      </footer>
    </div>
  );
};

export default SavedParksPage;

