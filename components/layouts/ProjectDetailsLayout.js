import NextLink from "next/link";
import { Box, Button } from "@chakra-ui/react";
import Head from "next/head";

export default function ProjectDetailsLayout({ children, title }) {
  return (
    <Box as="main" maxW="900px" m="auto" py={10}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box mb={10}>
        <NextLink href="/">
          <Button>Go Back</Button>
        </NextLink>
      </Box>
      {children}
    </Box>
  );
}
