import './BlogSection.css';

import ContentBlog from "../ContentBlog/ContentBlog";
import HeadLine from "../heading-of-section/HeadLine";
import { Container } from 'react-bootstrap';

function BlogSection() {
return (
<>
<div className='bg-light padding-all'>
    <Container className="pb-5 Insights text-center">
        <HeadLine title={'Blog & Insights'} />
    </Container>
        <ContentBlog />
</div>
</>
)
}
export default BlogSection;