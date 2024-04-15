import React from 'react';
import classNames from 'classnames';
import { PostDetails } from './PostDetails';
import { usePostInfo } from '../utils/PostContext';

export const Sidebar: React.FC = () => {
  const { selectedPost } = usePostInfo();

  return (
    <div
      data-cy="Sidebar"
      className={classNames('tile', 'is-parent', 'is-8-desktop', 'Sidebar', {
        'Sidebar--open': !!selectedPost,
      })}
    >
      {!!selectedPost && (
        <div className="tile is-child box is-success ">
          <PostDetails />
        </div>
      )}
    </div>
  );
};