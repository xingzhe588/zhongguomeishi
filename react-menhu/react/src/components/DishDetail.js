import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DishDetail = () => {
  const { id } = useParams(); // 从 URL 中获取 id
  const [detail, setDetail] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    // 获取菜品基本信息
    axios.get(`http://127.0.0.1:10520/api/user/getFoods`)
      .then(res => {
        const dish = res.data.find(item => item.id == id);
        if (dish) {
          setName(dish.name);
          setImage(dish.image);
        }
      });

    // 获取菜品详情
    axios.get(`http://127.0.0.1:10520/api/user/getFoodDetail?id=${id}`)
      .then(res => {
        setDetail(res.data.detail);
      })
      .catch(err => {
        console.error('获取详情失败', err);
      });
  }, [id]);

  return (
    <section className="pt-28 pb-20 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen relative">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* 顶部封面图 */}
        <div className="relative w-full h-48 mb-10 rounded-xl overflow-hidden shadow-lg">
          <div className="absolute inset-0 z-0">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover blur-md scale-110"
            />
          </div>
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <img
              src={image}
              alt={name}
              className="h-40 rounded-lg shadow-lg object-contain bg-white/80 p-1"
            />
          </div>
        </div>

        {/* 菜品介绍 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-primary dark:text-white mb-4">{name}</h2>
          {detail ? (
            detail.split('\n').map((line, index) => (
              <p key={index} className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                {line}
              </p>
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400">正在加载菜品详情...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default DishDetail;
