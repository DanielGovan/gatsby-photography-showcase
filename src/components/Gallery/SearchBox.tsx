import React from 'react';
import { Icon, Input } from '@chakra-ui/react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

import { Box, Flex } from '../../_nextGen/primitives';
import { Button } from '../../_nextGen/button';

import { SortTypes } from './Gallery';

type SearchBoxProps = {
  searchHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sortHandler: (e: React.MouseEvent<HTMLButtonElement>, type: SortTypes) => void;
  searchValue: string;
  sortType: string;
  sortDirection: boolean;
};

export const SearchBox = ({
  searchHandler,
  sortHandler,
  searchValue,
  sortType,
  sortDirection,
}: SearchBoxProps) => {
  return (
    <Flex
      position="fixed"
      bottom="0"
      zIndex="999"
      justifyContent="space-around"
      width="100vw"
    >
      <Box
        bg="black"
        px="2"
        py="2"
        borderRadius="20px 20px 0 0"
        display="flex"
        alignItems="center"
        flexDirection={['column', 'row', 'row']}
      >
        <Input
          px={[2, 4]}
          py={[1, 2]}
          mx={2}
          placeholder="Search"
          value={searchValue}
          onChange={searchHandler}
          flexBasis="50%"
        />
        <Flex>
          <Button size="sm" mx={1} onClick={e => sortHandler(e, 'dateTaken')}>
            Order by date{' '}
            {sortType === 'dateTaken' &&
              (sortDirection === true ? (
                <Icon as={FaArrowDown} ml={1} />
              ) : (
                <Icon as={FaArrowUp} ml={1} />
              ))}
          </Button>
          <Button size="sm" mx={1} onClick={e => sortHandler(e, 'alt')}>
            Order by name{' '}
            {sortType === 'model' &&
              (sortDirection === true ? (
                <Icon as={FaArrowDown} ml={1} />
              ) : (
                <Icon as={FaArrowUp} ml={1} />
              ))}
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};
