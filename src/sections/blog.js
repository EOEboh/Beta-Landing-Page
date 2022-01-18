/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import Post from 'components/cards/post';

import news1 from 'assets/images/blog/1.jpg';
import news2 from 'assets/images/blog/2.jpg';
import news3 from 'assets/images/blog/3.jpg';
import news4 from 'assets/images/blog/4.jpg';

const data = [
  {
    id: 1,
    image: news1,
    title: 'Videography and what it entails',
    desc:
      'What type of videos suits what?',
    link: '#',
  },
  {
    id: 2,
    image: news2,
    title:
      'Photography at night',
    desc: '',
    link: '#',
  },
  {
    id: 3,
    image: news3,
    title: 'The right camera and photography tools to have',
    desc: '',
    link: '',
  },
  {
    id: 4,
    image: news4,
    title: 'Choosing a niche in photography',
    desc: 'There are various kinds of photography. Many are money spinners.....',
    link: '',
  },
];

const masonryOptions = {
  originTop: false,
};

const Blog = () => {
  return (
    <section id="blog" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={{ mb: [6, null, null, 14] }}
          slogan="Latest newsfeed"
          title="Our recent blog post that updated"
        />
        <Masonry sx={styles.masonry} options={masonryOptions}>
          {data.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </Masonry>
      </Container>
    </section>
  );
};

export default Blog;

const styles = {
  section: {
    pt: [6, null, null, null, 2, 10, 14],
    pb: [2, null, null, null, 6, 10, 14],
  },
  masonry: {
    maxWidth: 1250,
    mx: [-3, null, null, null, 'auto'],
  },
};
