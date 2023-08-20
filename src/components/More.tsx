import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { forwardRef, lazy, useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useIsInViewport from "../hooks/viewportHook";
const Typed = lazy(() => import("react-typed"));

interface MoreProps {
  ref: React.RefObject<HTMLDivElement>;
}

const More = forwardRef<HTMLDivElement, MoreProps>((_, ref) => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("sm"));
  const matchDownLg = useMediaQuery(theme.breakpoints.down("md"));
  const [show, setShow] = useState(false);
  const helloRef = useRef<HTMLDivElement>(null);
  const inViewport = useIsInViewport(helloRef);

  useEffect(() => {
    if (show) return;
    if (inViewport) {
      setShow(true);
    }
  }, [inViewport]);

  return (
    <Box
      className="min-vh-100"
      ref={ref}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      paddingBottom={8}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{ color: "#f8f9fa" }}
        marginBottom={2}
      >
        More...
      </Typography>
      <Typography
        align="center"
        sx={{ color: "#f8f9fa" }}
        fontSize={16}
        ref={helloRef}
        gutterBottom
      >
        {show
          ? (
            <Typed
              typeSpeed={40}
              strings={[
                "I'll show you some of my hobbies, my favorite things, my stories here.",
              ]}
            />
          )
          : (
            null
          )}
      </Typography>
      <Box sx={{ width: "100%", maxHeight: "60vh", overflowY: "scroll" }}>
        <ImageList
          variant="masonry"
          cols={matchDownMd ? 1 : matchDownLg ? 2 : 3}
          gap={8}
        >
          {itemData.map((item, _) => (
            item &&
            (
              <ImageListItem key={item.img}>
                <LazyLoadImage
                  src={`${item.img}?w=162&auto=format`}
                  srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  effect="blur"
                  wrapperProps={{
                    style: {
                      display: "block",
                    },
                  }}
                  style={{
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    display: "block",
                    width: "100%",
                  }}
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={item.subtitle}
                />
              </ImageListItem>
            )
          ))}
        </ImageList>
      </Box>
    </Box>
  );
});
export default More;

const itemData = [
  {
    img:
      "https://htsport.vn/wp-content/uploads/2020/05/7-chien-thuat-bong-da-san-5-nguoi-anh-bia.jpg",
    title: "Soccer",
    subtitle: "I really love soccer",
  },
  {
    img:
      "https://thethaodonga.com/wp-content/uploads/2022/03/hinh-anh-bong-chuyen-dep-14.png",
    title: "Volleyball",
    subtitle: "Volleyball is a cherished part of my childhood",
  },
  {
    img:
      "https://evashopping.vn/public/storage/editor/blog/di-boi-vao-mua-dong-nen-hay-khongg.jpg",
    title: "Swimming",
    subtitle: "I can swim with many styles",
  },
  {
    img:
      "https://images.pexels.com/photos/5767580/pexels-photo-5767580.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Badminton",
    subtitle: "I also like badminton even though I'm not good at it",
  },
  {
    img:
      "https://zunecum.com/wp-content/uploads/2021/07/nhung-ky-thuat-bong-ban-giup-ban-tro-thanh-cao-thu-cua-mon-the-thao-nay-clb-bong-ban-1200.jpg",
    title: "Table tennis",
    subtitle: "I'm not good at it but I like it",
  },
  {
    img:
      "https://billiardshoanthuy.vn/wp-content/uploads/2020/02/huong-dan-cach-choi-bida-3-bang-cho-nguoi-moi-bat-dau-1.jpg",
    title: "Billiards",
    subtitle: "I play billiards with my friends every weekend",
  },
  {
    img: "https://media.techmaster.vn/api/static/10194/bvq3akc51cobimh85kkg",
    title: "Fix bugs",
    subtitle: "...",
  },
  ,
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    subtitle:
      "I like taking photos but it would be a disaster if I take the picture",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    subtitle: "I'm a coffee addict",
  },
  {
    img: "https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7",
    title: "Travel",
    subtitle: "I love traveling but my wallet doesn't",
  },
];
