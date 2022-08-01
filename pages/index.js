// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Image from "next/image";

import { Button, Flex, Heading } from "@chakra-ui/react";

// Import framer motion
import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(https://i.ibb.co/JmzC5W9/Gradient-BG.jpg)`,
      }}
    >
      <Head>
        <title>LinkXR - One Account for VR, AR &amp; MR</title>
        <meta name="title" content="LinkXR - One Account, all of VR, and MR" />
        <meta
          name="description"
          content="Conveniently and safely store all your social XR accounts in one place."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://linkxr.one/" />
        <meta
          property="og:title"
          content="LinkXR - One Account for VR, AR &amp; MR"
        />
        <meta
          property="og:description"
          content="Conveniently and safely store all your social XR accounts in one place."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/4d8229w/Link-XR-Logo-Compressed.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://linkxr.one/" />
        <meta
          property="twitter:title"
          content="LinkXR - One Account for VR, AR &amp; MR"
        />
        <meta
          property="twitter:description"
          content="Conveniently and safely store all your social XR accounts in one place."
        />
        <meta
          property="twitter:image"
          content="https://i.ibb.co/4d8229w/Link-XR-Logo-Compressed.png"
        />
      </Head>

      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex
          width="80vh"
          direction="column"
          p={12}
          rounded={5}
          alignItems="center"
        >
          <motion.div
            initial={{ y: -100, x: 50, opacity: 0 }}
            animate={{ y: 0, x: 0, opacity: 1 }}
            transition={{ ease: [0.42, 0, 0, 1.08], duration: 1.5, delay: 0.2 }}
          >
            <Image
              src="/logo.png"
              alt="LinkXR Logo"
              width={2600}
              height={700}
            />
          </motion.div>
          <motion.div
            initial={{ y: 100, x: -50, opacity: 0 }}
            animate={{ y: 0, x: 0, opacity: 1 }}
            transition={{ ease: [0.42, 0, 0, 1.08], duration: 1, delay: 0.8 }}
          >
            <Heading fontStyle="italic" textAlign="right" mt={3}>
              One Account, all of VR
            </Heading>
            <Heading fontStyle="italic" textAlign="right" opacity={0.75}>
              XR
            </Heading>
            <Heading mb={6} fontStyle="italic" textAlign="right" opacity={0.5}>
              MR
            </Heading>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: [0.42, 0, 0, 1.08], duration: 2, delay: 1.2 }}
          >
            <Button disabled={true}>Currently in Closed Beta</Button>
          </motion.div>
        </Flex>
      </Flex>
    </div>
  );
}
