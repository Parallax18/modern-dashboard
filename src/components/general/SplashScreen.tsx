import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const SplashScreen = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1 }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white',
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        h="100vh"
        w="100vw"
      >
        {/* add your logo or any other content here */}
        <Box>My App</Box>
      </Box>
    </motion.div>
  );
};

export default SplashScreen;
