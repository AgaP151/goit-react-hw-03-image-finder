import PropTypes from 'prop-types';
import { ListItem } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalerryItem/ImageGalleryItem';

export const ImageGallery = ({ pics, showModal }) => {
  return (
    
    <ListItem>
      <div>
      {pics.map(pic => {
        // console.log(pic);
        return (
          <ImageGalleryItem
            key={pic.id}
            webformatURL={pic.webformatURL}
            tags={pic.tags}
            largeImageURL={pic.largeImageURL}
            showModal={showModal}
          />
        );
      })}
      </div>
    </ListItem>
    
  )
};

ImageGallery.propTypes = {
  pics: PropTypes.arrayOf(PropTypes.object).isRequired,
  showModal: PropTypes.func.isRequired,
};
