import React from 'react';

import { BodyHeader, BodyText } from '../typography';
import { ContentBrace } from '../layout';
import { useGalleryQuery, galleryQueryParser } from '../imagery';
import { GalleryWrap } from '../galleries';
import { TabPanel, TabPanels, Tabs } from '../tabs';

export const ShootTypesContent = () => {
  const {
    couplesPicks: csrc,
    dragPicks: dsrc,
    headShotPicks: hssrc,
    fitnessPicks: fsrc,
  } = useGalleryQuery();
  const couplesPicks = galleryQueryParser(csrc);
  const dragPicks = galleryQueryParser(dsrc);
  const headShotPicks = galleryQueryParser(hssrc);
  const fitnessPicks = galleryQueryParser(fsrc);

  return (
    <ContentBrace>
      <BodyHeader>Shoot types:</BodyHeader>
      <BodyText my="2rem">
        Here's some picks from more speciality shoots: headshots, couples, drag and
        fitness.
      </BodyText>
      <Tabs
        my="2rem"
        isFitted
        isLazy
        color={'white'}
        titles={['Couples', 'Fitness', 'Drag', 'Headshots']}
      >
        <TabPanels p="0">
          <TabPanel p="0">
            <GalleryWrap
              galleryName="Couples"
              galleryType="imagegrid"
              imageArray={couplesPicks}
            />
          </TabPanel>
          <TabPanel>
            <GalleryWrap
              galleryName="'Fitness'"
              galleryType="imagegrid"
              imageArray={fitnessPicks}
            />
          </TabPanel>
          <TabPanel>
            <GalleryWrap
              galleryName="Drag"
              galleryType="imagegrid"
              imageArray={dragPicks}
            />
          </TabPanel>
          <TabPanel>
            <GalleryWrap
              galleryName="Headshots"
              galleryType="imagegrid"
              imageArray={headShotPicks}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ContentBrace>
  );
};
