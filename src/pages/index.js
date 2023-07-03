import InstagramOne from "../common/components/instagram/InstagramOne";
import FooterThree from "../common/elements/footer/FooterThree";
import HeadTitle from "../common/elements/head/HeadTitle";
import { getAllPosts } from "../../lib/api";
import PostSectionOne from "../common/components/post/PostSectionOne";
import PostSectionTwo from "../common/components/post/PostSectionTwo";
import PostSectionThree from "../common/components/post/PostSectionThree";
import CategoryList from "../common/components/category/CategoryList";
import PostSectionFour from "../common/components/post/PostSectionFour";
import SocialOne from "../common/components/social/SocialOne";
import PostSectionFive from "../common/components/post/PostSectionFive";
import PostSectionSix from "../common/components/post/PostSectionSix";

import HeaderFour from "../common/elements/header/HeaderFour";

import SliderThree from "../common/components/slider/SliderThree";

const HomeDefault = ({ allPosts }) => {
  const videoPost = allPosts.filter((post) => post.postFormat === "video");

  return (
    <>
      <HeadTitle pageTitle="IntSelf:" />
      <HeaderFour postData={allPosts} />
      <SliderThree postData={allPosts} />
      <PostSectionOne postData={allPosts} />
      <PostSectionTwo postData={allPosts} adBanner={true} />
      <CategoryList cateData={allPosts} />
      <PostSectionSix postData={allPosts} />
      <SocialOne />
      <PostSectionFive postData={allPosts} />
      <PostSectionFour postData={allPosts} adBanner={true} />
      <PostSectionThree postData={videoPost} heading="Featured Video" />
      <InstagramOne parentClass="bg-color-grey" />
      <FooterThree />
    </>
  );
};

export default HomeDefault;

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "id",
    "title",
    "featureImg",
    "postFormat",
    "featured",
    "slidePost",
    "date",
    "slug",
    "cate",
    "cate_img",
    "author_img",
    "author_name",
    "post_views",
    "read_time",
    "author_social",
  ]);

  return {
    props: { allPosts },
  };
}
