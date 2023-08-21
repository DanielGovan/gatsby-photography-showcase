import React, { ReactNode } from 'react';
import { useField } from 'formik';

import { Box } from '../primitives';
import { ChakraBox } from '../animations';
import { GlassBox } from '../components/GlassBox';

import { useGalleryQuery, galleryQueryParser, ImageWrap } from '../imagery';

import Question from './Question';
import QuestionRadios, { Radio } from './QuestionRadios';
import QuestionChecks, { CheckboxItem } from './QuestionChecks';

export type PollQuestionProps = {
  labelText: string;
  fieldName: string;
  multiAnswer: boolean;
  otherOption: boolean;
  questions: string[];
  contextImage?: string;
  images?: string[];
  explanation?: string;
  percentages?: number[];
  answered?: boolean;
};

type PercentageWrapProps = {
  percent: string;
  children: ReactNode;
};

const PercentageWrap = ({ percent, children }: PercentageWrapProps) => (
  <Box pos="relative" width="100%" pr="1rem" pt="0.3rem">
    <ChakraBox
      initial={{ width: 0 }}
      animate={{ width: percent }}
      exit={{ width: 0, transition: { duration: '0s' } }}
      transition="width ease 0.6s"
      background="rgba(255,255,255,0.5)"
      height="100%"
      pos="absolute"
      top="0"
      left="0"
    ></ChakraBox>
    {children}
  </Box>
);

const psuedoTitleStyles = {
  textAlign: 'center',
  mb: '1rem',
  fontSize: '2rem !important',
  lineHeight: '1',
};

export const PollQuestion = ({
  labelText,
  fieldName,
  multiAnswer,
  questions,
  images,
  otherOption,
  contextImage,
  explanation,
  percentages = [0, 0, 0, 0, 0, 0, 0, 0, 0],
  answered,
}: PollQuestionProps) => {
  const pollFieldName = `poll_${fieldName}`;

  const [field] = useField(pollFieldName);

  const { pollOptions: posrc, contextPicks: cpsrc } = useGalleryQuery();
  const pollOptions = galleryQueryParser(posrc);
  const contextPicks = galleryQueryParser(cpsrc);
  const currentContext = contextImage
    ? contextPicks.find(obj => obj.fileName.includes(contextImage))
    : null;

  return (
    <Box
      px="1rem"
      sx={
        answered
          ? {
              '.chakra-form__label': psuedoTitleStyles,
              '.chakra-radio__control': { visibility: 'hidden', pointerEvents: 'none' },
              '.chakra-checkbox__control': {
                visibility: 'hidden',
                pointerEvents: 'none',
              },
            }
          : {
              '.chakra-form__label': psuedoTitleStyles,
            }
      }
    >
      {multiAnswer ? (
        <>
          <QuestionChecks
            fieldName={pollFieldName}
            labelText={labelText}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            {contextImage && currentContext && (
              <ImageWrap isSlider={true} imageData={currentContext} />
            )}
            {questions.map((question, i) => {
              const optionImage1 = images
                ? pollOptions.find(obj => obj.fileName.includes(`${images[i]}1`))
                : null;
              const optionImage2 = images
                ? pollOptions.find(obj => obj.fileName.includes(`${images[i]}2`))
                : null;
              return (
                <>
                  {optionImage1 && optionImage2 && (
                    <Box>
                      <ImageWrap
                        isSlider={true}
                        sx={{
                          width: '50%',
                          height: '50%',
                          float: 'left',
                          objectFit: 'cover',
                        }}
                        imageData={optionImage1}
                      />
                      <ImageWrap
                        isSlider={true}
                        sx={{
                          width: '50%',
                          height: '50%',
                          float: 'left',
                          objectFit: 'cover',
                        }}
                        imageData={optionImage2}
                      />
                    </Box>
                  )}
                  <Box key={`${pollFieldName}${i}`} display="flex" alignItems="center">
                    <PercentageWrap percent={`${percentages[i]}%`}>
                      <CheckboxItem
                        fieldName={pollFieldName}
                        value={question}
                        mb={optionImage1 && optionImage2 ? '10' : '0'}
                      />
                    </PercentageWrap>
                  </Box>
                </>
              );
            })}
            {otherOption && (
              <Box key={`${pollFieldName}Other`}>
                <CheckboxItem
                  fieldName={pollFieldName}
                  value="other"
                  labelText="other..."
                />
                {field?.value?.includes('other') && (
                  <Question
                    mt="1rem"
                    fieldName={`${pollFieldName}_other`}
                    labelText=""
                    placeholder="Please write"
                  />
                )}
              </Box>
            )}
          </QuestionChecks>
        </>
      ) : (
        <>
          <QuestionRadios
            fieldName={pollFieldName}
            labelText={labelText}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            {contextImage && currentContext && (
              <ImageWrap
                isSlider={true}
                sx={{
                  height: '400px',
                  objectFit: 'contain',
                }}
                imageData={currentContext}
              />
            )}
            {questions.map((question, i) => (
              <Box key={`${pollFieldName}${i}`}>
                <PercentageWrap percent={`${percentages[i]}%`}>
                  <Radio value={question} labelText={question} />
                </PercentageWrap>
              </Box>
            ))}
            {otherOption && (
              <Box mt="0.5rem" key={`${pollFieldName}Other`}>
                <Radio value="other" labelText="other..." />
                {field?.value?.includes('other') && (
                  <Question
                    mt="1rem"
                    fieldName={`${pollFieldName}_other`}
                    labelText=""
                    placeholder="Please write"
                  />
                )}
              </Box>
            )}
          </QuestionRadios>
        </>
      )}
      {explanation && answered && (
        <GlassBox maxW="500px" mx="auto" px="1.2rem" py="0.6rem" mb="1rem">
          {explanation}
        </GlassBox>
      )}
    </Box>
  );
};
