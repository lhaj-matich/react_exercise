import { Button, Box, Text, HStack } from "@chakra-ui/react";

interface Page {
    max: number;
    page: number;
    onSetPage: (page: number) => void;
}

const PageButton = ({max, page, onSetPage}: Page) => {

  return (
    <Box width="100%">
      <HStack justifyContent="center" padding={5}>
        <Button onClick={() => page > 1 && onSetPage(page - 1)}>Prev</Button>
        <Text color="#fff" fontSize={20}>{page}</Text>
        <Button onClick={() => page < Math.round(max / 6) && onSetPage(page + 1)}>Next</Button>
      </HStack>
    </Box>
  );
};

export default PageButton;
