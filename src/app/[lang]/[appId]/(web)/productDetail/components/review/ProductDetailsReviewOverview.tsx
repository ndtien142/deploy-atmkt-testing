// @mui
import { styled } from '@mui/material/styles';
import { Grid, Rating, Button, Typography, LinearProgress, Stack, Link } from '@mui/material';
// utils
// @types
import { fShortenNumber } from '@/common/utils/formatNumber';
import Iconify from '@/common/components/Iconify';
import { sumBy } from 'lodash';
// components

// ----------------------------------------------------------------------

const RatingStyle = styled(Rating)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const GridStyle = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  
}));

// ----------------------------------------------------------------------

const reviewRating = {
 
    ratings: [
      {
          name: 1,
          starCount: 9911,
          reviewCount: 1947
      },
      {
          name: 2,
          starCount: 1947,
          reviewCount: 9124
      },
      {
          name: 3,
          starCount: 9124,
          reviewCount: 6984
      },
      {
          name: 4,
          starCount: 6984,
          reviewCount: 8488
      },
      {
          name: 5,
          starCount: 8488,
          reviewCount: 2034
      }
  ],
  totalRating: 3.7,
  totalReview: 9124,
  
};

export default function ProductDetailsReviewOverview({onOpen}:{onOpen:VoidFunction}) {
  const { totalRating, totalReview, ratings } = reviewRating;

  const total = sumBy(ratings, (star :any) => star.starCount);

  return (
    <Grid container>
      <GridStyle item xs={12} md={4}>
        <Typography variant="subtitle1" gutterBottom>
          Average rating
        </Typography>
        <Typography variant="h2" gutterBottom sx={{ color: 'error.main' }}>
          {totalRating}/5
        </Typography>
        <RatingStyle readOnly value={totalRating} precision={0.1} />
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Rating sản phẩm
        </Typography>
      </GridStyle>

      <GridStyle item xs={12} md={6}>
        <Stack spacing={1.5} sx={{ width: 1 }}>
          {ratings
            .slice(0)
            .reverse()
            .map((rating) => (
              <ProgressItem key={rating.name} star={rating} total={total} />
            ))}
        </Stack>
      </GridStyle>

     
    </Grid>
  );
}

// ----------------------------------------------------------------------

type StarRating = {
  name: number;
  starCount: number;
  reviewCount: number;
};

type ProgressItemProps = {
  star: StarRating;
  total: number;
};

function ProgressItem({ star, total }: ProgressItemProps) {
  const { name, starCount, reviewCount } = star;
  return (
    <Stack direction="row" alignItems="center" spacing={1.5}>
      <LinearProgress
        variant="determinate"
        value={(starCount / total) * 100}
        sx={{
          mx: 2,
          flexGrow: 1,
          bgcolor: 'divider',
        }}
      />
      <Rating size="small" value={name} precision={0.1} readOnly />

      <Typography
        variant="body2"
        sx={{ color: 'text.secondary', minWidth: 64, textAlign: 'right' }}
      >
        {fShortenNumber(reviewCount)}
      </Typography>
    </Stack>
  );
}
