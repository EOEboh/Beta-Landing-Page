/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';

import icon1 from 'assets/images/wedding/wedding1.jpg';
import icon2 from 'assets/images/grad/grad1.jpg';
import icon3 from 'assets/images/photoshoot/photo1.jpg';


const data = [
  {
    id: 1,
    icon: icon1,
    path: '/gallery/#wedding',
    title: 'A collection of our wedding snaps',
    description: `We have the professional prowess and experience to cover your wedding and make your love life memorable`,
  },
  {
    id: 2,
    icon: icon2,
    path: '/gallery/#grad',
    title: 'A collection of our graduation snaps',
    description: `Did you just finished a degree or diploma, let's make your memory forever`,
  },
  {
    id: 3,
    icon: icon3,
    path: '/gallery//#photo',
    title: 'A collection of random photoshoot',
    description: `Everyone is photogenic with the right camera tools and expertise. `,
  },
  
];

const UltimateFeatures = () => {
  return (
    <section id="features" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Photography at its best "
          title="Go beyond memories and see the past"
        />
        <Box sx={styles.grid}>
          {data?.map((item) => (
            <Feature className="feature-item" key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default UltimateFeatures;

const styles = {
  section: {
    backgroundColor: '#F9FBFD',
    pt: [8, null, null, 12, null, 10],
    pb: [9, null, null, 12, 16, 18],
  },
  heading: {
    marginBottom: [7, null, null, 8, 7],
    p: {
      maxWidth: 490,
      margin: ['10px auto 0'],
    },
  },
  grid: {
    gap: [6, null, 0],
    display: 'grid',
    maxWidth: 1080,
    margin: '0 auto',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      null,
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    borderTop: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
    borderLeft: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
  },
};
