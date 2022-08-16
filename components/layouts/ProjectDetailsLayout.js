import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Box, Button } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../footer";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

export default function ProjectDetailsLayout({ children, title }) {
  const router = useRouter();

  const handleGoBack = () => router.back();
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
    >
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="main" maxW="900px" m="auto" py={10} px={5}>
        <Box mb={10}>
          <Button onClick={handleGoBack}>Go Back</Button>
        </Box>
        {children}
      </Box>

      <Footer />
    </motion.div>
  );
}
