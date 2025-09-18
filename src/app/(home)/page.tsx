import { Divider } from '@mui/material';
import HeroSection from './components/hero/hero-section';
import TrendingSection from './components/trending/trending-section';

export default function BasicButtons() {
  return (
    <div>
      <HeroSection />
      <Divider sx={{ mx: -10, my: 8 }} />
      <TrendingSection />
    </div>
  );
}