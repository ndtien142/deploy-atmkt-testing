import { useState } from 'react';
// @mui
import { Divider, Collapse } from '@mui/material';
//
import ProductDetailsReviewList from './ProductDetailsReviewList';
import ProductDetailsReviewOverview from './ProductDetailsReviewOverview';

// ----------------------------------------------------------------------

type Props = {
  product: any;
};

export default function ProductDetailsReview() {
  const [reviewBox, setReviewBox] = useState(false);

  const handleOpenReviewBox = () => {
    setReviewBox((prev) => !prev);
  };

  const handleCloseReviewBox = () => {
    setReviewBox(false);
  };
const reviews = [
  {
     id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
      name: "Jayvion Simon",
      postedAt: "2023-07-04T05:32:35.369Z",
      comment: "The sun slowly set over the horizon, painting the sky in vibrant hues of orange and pink.",
      isPurchased: true,
      rating: 4.2,
      avatarUrl: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg",
      helpful: 9911,
      attachments: []
  },
  {
      id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
      name: "Lucian Obrien",
      postedAt: "2023-07-03T04:32:35.369Z",
      comment: "She eagerly opened the gift, her eyes sparkling with excitement.",
      isPurchased: true,
      rating: 3.7,
      avatarUrl: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_2.jpg",
      helpful: 1947,
      attachments: [
          "https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_1.jpg"
      ]
  },
  {
      id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
      name: "Deja Brady",
      postedAt: "2023-07-02T03:32:35.369Z",
      comment: "The old oak tree stood tall and majestic, its branches swaying gently in the breeze.",
      isPurchased: true,
      rating: 4.5,
      avatarUrl: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_3.jpg",
      helpful: 9124,
      attachments: []
  }
]
  return (
    <>
      <ProductDetailsReviewOverview  onOpen={handleOpenReviewBox} />

      <Divider />

      <Collapse in={reviewBox}>
        {/* <ProductDetailsReviewForm onClose={handleCloseReviewBox} id="move_add_review" /> */}
        <Divider />
      </Collapse>

      <ProductDetailsReviewList reviews={reviews} />
    </>
  );
}
