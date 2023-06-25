// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Image from "next/image";

import { Button, Flex, Heading } from "@chakra-ui/react";

// Import framer motion
import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div
      style={{
        backgroundImage: `url(https://cdn.linkxr.one/official_resources/GradientBG.jpg)`,
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
              src="/Logo.png"
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
              AR
            </Heading>
            <Heading mb={6} fontStyle="italic" textAlign="right" opacity={0.5}>
              MR
            </Heading>
          </motion.div>

          <motion.div
            initial={{
              y: 100,
              x: -50,
              opacity: 0,
              rotateX: "-360deg",
              rotateY: "-20deg",
            }}
            animate={{
              y: 0,
              x: 0,
              opacity: 1,
              rotateX: "0deg",
              rotateY: "0deg",
            }}
            transition={{ ease: [0.42, 0, 0, 1.08], duration: 2, delay: 1.0 }}
          >
            <Heading fontSize={"3vh"} my={10}>
              🚀 Launching July 2023
            </Heading>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: [0.42, 0, 0, 1.08], duration: 2, delay: 2.0 }}
          >
            <Button
              p={4}
              width="100%"
              height="50px"
              fontWeight={"black"}
              fontStyle="italic"
              fontSize={"lg"}
              mb="10px"
              colorScheme={"purple"}
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              color={"#ffffff"}
              letterSpacing="normal"
              transitionProperty="all"
              transitionTimingFunction="ease-out"
              transitionDuration="0.5s"
              _hover={{
                letterSpacing: "widest",
                transitionProperty: "all",
                transitionTimingFunction: "ease-out",
                transitionDuration: "0.5s",
              }}
              onClick={() => {
                router.push("https://tally.so/r/wvM5Bv");
              }}
            >
              APPLY FOR EARLY ACCESS
            </Button>
          </motion.div>
        </Flex>
      </Flex>
    </div>
  );
}
