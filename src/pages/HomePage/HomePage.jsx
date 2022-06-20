import ImageSlider from "../../components/ImageSlider/ImageSlider";
import HomeBlog from "../../components/HomeBlog/HomeBlog";
import BlogCardContainer from "../../components/BlogCardContainer/BlogCardContainer";

function HomePage({homePageData}) {

  const sliderData = homePageData.sliderData;
  const homeBlogData = homePageData.homeBlogData
  const blogCardContainerData = homePageData.blogCardContainerData;

  return (
    <div className="homePage">
      <ImageSlider slides={sliderData}/>
      <HomeBlog homeBlogData={homeBlogData}/>
      <BlogCardContainer blogCardContainerData={blogCardContainerData}/>
    </div>
  );
}

export default HomePage;
