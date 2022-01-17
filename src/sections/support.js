/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Heading, Text } from 'theme-ui';
import SupportType from 'components/cards/support-type';
import Image from 'components/image';
import illustration from 'assets/images/support.jpg';
import icon1 from 'assets/images/icons/1.png';
import icon2 from 'assets/images/icons/2.png';

const data = [
  {
    id: 1,
    icon: icon1,
    title: 'Live Coverage',
    text: `Our team would be there to document your memorable event`,
  },
  {
    id: 2,
    icon: icon2,
    title: 'Media Support',
    text: `We rent out and help you set up projectors and lightings for your event`,
  },
];

const Support = () => {
  return (
    <section id="support" sx={styles.section}>
      <Container>
        <div sx={styles.grid}>
          <div sx={styles.content}>
            <div sx={styles.heading}>
              <Heading sx={styles.title}>
                Do you need to cover an event? That is what we do best
              </Heading>
              <Text as="p" sx={styles.summary}>
                We cover differnt events ranging from weddings, birthdays, naming ceremonies, graduation party and many more..
              </Text>
            </div>
            {/* <SectionHeading
              sx={styles.heading}
              title="Do you need help? Our support team ready to help you"
              description="Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever."
            /> */}
            {data.map((support) => (
              <SupportType key={support.id} data={support} />
            ))}
          </div>
          <Box as="figure" sx={styles.illustration} className="illustration">
            <Image src={illustration} alt="illustration" />
          </Box>
        </div>
      </Container>
    </section>
  );
};

export default Support;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 17],
    pb: [8, null, null, null, 10, 16],
  },

  grid: {
    gap: [5, null, null, 10, 4],
    mx: 'auto',
    maxWidth: 1193,
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      null,
      null,
      '360px 1fr',
      '470px 1fr',
    ],
  },
  content: {
    display: [null, null, null, 'grid', 'unset'],
    gridTemplateColumns: [null, null, null, 'repeat(2, 1fr)', 'unset'],
  },
  heading: {
    gridColumn: [null, null, null, '1/3', 'unset'],
    maxWidth: [null, null, null, 420, 'none'],
    mx: [null, null, null, 'auto', 'unset'],
    textAlign: ['center', null, null, 'left'],
    h2: {
      color: 'heading',
      fontFamily: 'headingAlt',
      fontSize: [4, null, 6, 8, null, null, 11],
      fontWeight: 500,
      lineHeight: [1.33, null, 1.4, 1.53],
      letterSpacing: ['-0.5px', null, null, '-1px'],
      textAlign: ['center', null, null, null, 'left'],
      span: {
        backgroundSize: 'cover',
        px: 2,
      },
      mb: 4,
    },
    p: {
      color: 'textSecondary',
      fontSize: ['13px', null, null, 2, '15px', 2],
      lineHeight: [1.86, null, null, null, 1.86, 2.25],
      maxWidth: 470,
      m: [null, null, null, '20px auto 0', '15px 0 0', null, 'unset'],
      textAlign: ['center', null, null, null, 'left'],
    },
  },
  illustration: {
    display: 'flex',
    alignItems: 'center',
  },
};
