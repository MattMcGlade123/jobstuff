'use client';

import React from 'react';

import MockAddingItemStructure from './MockAddingItemStructure';
import { useDispatch, useSelector } from 'react-redux';
import { selectSiteData, updateAddedNewPost, updateSiteData } from '@/features/siteData';

const MockAddingItemLogic = () => {
  const currentData = useSelector(selectSiteData);
  const dispatch = useDispatch();

  const addOne = () => {
    const mockPostData = {
      id: Math.floor(Math.random() * 100),
      title: "The quaint village inn welcomed weary travelers",
      body: "Its cozy rooms and warm hearth offered respite from the road. In the tavern below, locals gathered to share stories over pints of ale, their laughter echoing through the rafters. It was a place where strangers became friends and memories were made, a home away from home for those in need of rest.",
      tags: [
        "village",
        "inn",
        "hospitality"
      ],
      reactions: {
        likes: 918,
        dislikes: 50
      },
      views: 1939,
      userId: 174,
      thisPostCappedText: "Its cozy rooms and warm hearth offered respite from the road. In the tavern below, locals gathered t...",
      author: {
        name: "Ethan Brown",
        avatar: "https://randomuser.me/api/portraits/men/59.jpg"
      }
    }

    if (currentData) {
      const newList = [
        mockPostData,
        ...currentData,
      ]
      dispatch(updateSiteData(newList))
      dispatch(updateAddedNewPost(true));

      setTimeout(() => {
        dispatch(updateAddedNewPost(false));
      }, 5000)
    }
  };

  const componentProps = {
    addOne
  }

  return <MockAddingItemStructure {...componentProps} />;
};

export default MockAddingItemLogic;
