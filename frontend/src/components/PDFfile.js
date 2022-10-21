import React from "react";
import {
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },

  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const PDFfile = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image style={styles.image} src="/assets/images/aside1.png" />
        <Text>
          Section #1 Oh right. I forgot about the battle. Wow, you got that off
          the Internet? In my day, the Internet was only used to download
          pornography. I don't know what you did, Fry, but once again, you
          screwed up! Now all the planets are gonna start cracking wise about
          our mamas. She also liked to shut up! We'll go deliver this crate like
          professionals, and then we'll go home. In your time, yes, but nowadays
          shut up! Besides, these are adult stemcells, harvested from perfectly
          healthy adults whom I killed for their stemcells. And I'm his friend
          Jesus. Incidentally, you have a dime up your nose. Oh, you're a dollar
          naughtier than most. Bender,
        </Text>

        <Text>
          Section #2 naughtier than most. Bender, being God isn't easy. If you
          do too much, people get dependent on you, and if you do nothing, they
          lose hope. You have to use a light touch. Like a safecracker, or a
          pickpocket. And why did 'I' have to take a cab? Perhaps, but perhaps
          your civilization is merely the sewer of an even greater society above
          you! Why would a robot need to drink? Stop! Don't shoot fire stick in
          space canoe! Cause explosive decompression! I'm sure those windmills
          will keep them cool. No! I want to live! There are still too many
          things I don't own! Now that the,
        </Text>
      </Page>
    </Document>
  );
};

export default PDFfile;
