import React from 'react';

import { Box, Flex, Stack } from '@chakra-ui/react';

export const LabelText = ({ text, sx, ...rest }: { text: string; sx?: any }) => (
  <Box
    lineHeight={1.3}
    color="white"
    sx={{
      '&::first-letter': {
        textTransform: 'capitalize',
      },
      ...sx,
    }}
    {...rest}
  >
    {text}
  </Box>
);

export const QuestionsGroup = ({ children }: { children: React.ReactNode }) => (
  <Flex
    // mb={2}
    justifyContent="space-between"
    gap={4}
    flexDirection={['column', 'row', 'row']}
  >
    {children}
  </Flex>
);

export const QuestionMulti = ({ children }: { children: React.ReactNode }) => (
  <Flex
    flexGrow={1}
    direction="row"
    justifyContent="space-around"
    maxWidth="s"
    mx="auto"
    my="1rem"
  >
    {children}
  </Flex>
);

export const QuestionStack = (props: any) => (
  <Stack mt={1} spacing={1} {...props}>
    {props.children}
  </Stack>
);
