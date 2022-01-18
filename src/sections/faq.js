/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
import Link from 'next/link';


const data = [
  {
    id: 1,
    title: `01. Do you cover travelling events?`,
    contents: (
      <div>
        Yes we do. Just book a date with us at least one week before your intended event
      </div>
    ),
  },
  {
    id: 2,
    title: `02. I lost my photos/videos you covered, can i recover them?`,
    contents: (
      <div>
        Sure you can! We back-up our client's media for up to 3 years on the cloud storage. For an extended backup, it attracts a charge of NGN20,000. Recovery is free
      </div>
    ),
  },
  {
    id: 3,
    title: `03. Do you collect the entire pay before service?`,
    contents: (
      <div>
        We collect 70% of your total costs before service, this is to enable us prepare all the tools and materials we would be needing. The balance is paid after service is completed. 
      </div>
    ),
  },
  {
    id: 4,
    title: `04. What if I do not like the pictures/videos? Do I get a refund?`,
    contents: (
      <div>
        We have a no-refund policy after services have been rendered. We only give out a refund in the event that we do not show up.
      </div>
    ),
  },
  {
    id: 5,
    title: `05. Do you have a training school?`,
    contents: (
      <div>
        Yes we do offer a 4-month training on photography and 6-month training on videography. We would update on our website when we start taking new students
      </div>
    ),
  },
];

const Faq = () => {
  return (
    <section id="faq" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={{ mb: [6, null, null, 12, 17] }}
          slogan="Get your question answer"
          title="Frequently asked question"
        />

        <Accordion items={data} />
        <Box sx={styles.loadMore}>
          <Link href='https://wa.me/+2348140165937?text=Hi%2C+from+Beta+Photography%2C+how+can+i+help+you%3F&oq=Hi%2C+from+Beta+Photography%2C+how+can+i+help+you%3'>  
          <a target='_blank' style={{textDecoration: 'none'}}> 
          <Button variant="text">Still Question? Contact us</Button>
          </a>
          </Link>
        </Box>
      </Container>
    </section>
  );
};

export default Faq;

const styles = {
  section: {
    pt: [6, null, null, null, 6, 10, 14],
    pb: [12, null, null, null, 10, 22],
  },
  loadMore: {
    paddingTop: [3, null, null, 0],
    textAlign: 'center',
    button: {
      backgroundColor: '#ECF2F7',
      color: '#738295',
      minHeight: 50,
      px: '22px',
      ':hover': {
        backgroundColor: 'primary',
        color: 'white',
      },
    },
  },
};
