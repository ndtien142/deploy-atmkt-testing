import { useState } from 'react';
// @mui
import { Box, List, Button, Rating, Avatar, ListItem, Pagination, Typography, Stack, Input, Divider } from '@mui/material';
import { fDate } from '@/common/utils/common.utils';
import { fShortenNumber } from '@/common/utils/formatNumber';
import Iconify from '@/common/components/Iconify';
import ProductDetailsReviewForm from './ProductDetailsReviewForm';
// utils
// @types
// components

// ----------------------------------------------------------------------

type Props = {
  reviews: {
    id: string;
    name: string;
    avatarUrl: string;
    comment: string;
    rating: number;
    isPurchased: boolean;
    helpful: number;
    postedAt:  string ;
  }[];
};

export default function ProductDetailsReviewList({ reviews }: Props) {
 

  return (
    <Stack sx={{ pt: 3, px: 2, pb: 5 }} spacing={3}>
      <Typography variant='h4' fontWeight={700} py="10px">Bình luận</Typography>
      <List disablePadding>
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </List>
      <Box sx={{ display: 'flex',textDecoration:"underline",color:"#D94A27 " ,justifyContent: 'center' }}>
        Xem tất cả đánh giá
      </Box>
      <Divider/>
     <ProductDetailsReviewForm/>
    </Stack>
  );
}

// ----------------------------------------------------------------------

type ReviewItemProps = {
  review: {
    id: string;
    name: string;
    avatarUrl: string;
    comment: string;
    rating: number;
    isPurchased: boolean;
    helpful: number;
    postedAt: string ;
  };
};

function ReviewItem({ review }: ReviewItemProps) {
  const [isHelpful, setHelpfuls] = useState(false);

  const { name, rating, comment, helpful, postedAt, avatarUrl, isPurchased } = review;

  const handleClickHelpful = () => {
    setHelpfuls((prev) => !prev);
  };

  return (
    <>
      <ListItem
        disableGutters
        sx={{
          mb: 5,
          alignItems: 'flex-start',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Box
          sx={{
            mr: 2,
            display: 'flex',
            alignItems: 'center',
            mb: { xs: 2, sm: 0 },
            minWidth: { xs: 160, md: 240 },
            textAlign: { sm: 'center' },
            flexDirection: { sm: 'column' },
          }}
        >
          <Avatar
            src={avatarUrl}
            sx={{
              mr: { xs: 2, sm: 0 },
              mb: { sm: 2 },
              width: { md: 64 },
              height: { md: 64 },
            }}
          />
          <div>
            
           
          </div>
        </Box>

        <div>
        <Typography variant="subtitle2" noWrap>
              {name}
            </Typography>
            <Stack display="flex" spacing={3} direction="row" alignItems="center">
          <Rating size="small" value={rating} precision={0.1} readOnly />
          <Typography variant="caption" sx={{ color: 'text.secondary' }} noWrap>
              {fDate(postedAt)}
            </Typography>
            </Stack>
          {/* {isPurchased && (
            <Typography
              variant="caption"
              sx={{
                my: 1,
                display: 'flex',
                alignItems: 'center',
                color: 'primary.main',
              }}
            >
              <Iconify icon={'ic:round-verified'} width={16} height={16} />
              &nbsp;Verified purchase
            </Typography>
          )} */}

          <Typography variant="body2">{comment}</Typography>

          <Box
            sx={{
              mt: 1,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            {/* {!isHelpful && (
              <Typography variant="body2" sx={{ mr: 1 }}>
                Was this review helpful to you?
              </Typography>
            )} */}

            <Button
              size="small"
              color="inherit"
              startIcon={<Iconify icon={!isHelpful ? 'ic:round-thumb-up' : 'eva:checkmark-fill'} />}
              onClick={handleClickHelpful}
            >
              {/* {isHelpful ? 'Helpful' : 'Thank'}({fShortenNumber(!isHelpful ? helpful : helpful + 1)}
              ) */}
            </Button>
            <Typography variant='subtitle1' sx={{ color:"#D94A27", textDecoration:"underline"}}>Reply</Typography>
          </Box>
        </div>
      </ListItem>
    </>
  );
}
