import type { UseDisclosureProps } from '@chakra-ui/react';
import { Modal, ModalBody, ModalContent } from '@chakra-ui/react';
import { addDays, format } from 'date-fns';
import React, { useState } from 'react';
import type { RangeKeyDict } from 'react-date-range';
import { DateRangePicker } from 'react-date-range';

import { useChartData } from '@/hooks/use-chart-data';
import type { TViewsChartData } from '@/types/chart-data';

type CustomDatePickerProps = {
  isOpen: UseDisclosureProps['isOpen'];
  onClose: UseDisclosureProps['onClose'];
  setChartData: React.Dispatch<
    React.SetStateAction<TViewsChartData | undefined>
  >;
};

const CustomDatePicker = ({
  isOpen,
  onClose,
  setChartData,
}: CustomDatePickerProps) => {
  const { handleSelectedView } = useChartData();
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: 'selection',
    },
  ]);
  const handleFormatDate = (date: string | number | Date | undefined) => {
    return format(new Date(date!), 'dd-MMM-yy');
  };
  return (
    <Modal isOpen={isOpen!} onClose={onClose!}>
      <ModalContent shadow={'none'} p={0} top={150}>
        <ModalBody bg={'none'} p={0} pb={0} zIndex={200}>
          <DateRangePicker
            className={'w-[100%] border'}
            onChange={(item: RangeKeyDict) => {
              // @ts-ignore
              setState([item.selection]);
              setChartData({
                value: 'custom',
                text: `${handleFormatDate(
                  item.selection.startDate
                )}  - ${handleFormatDate(item.selection.endDate)}`,
                data: handleSelectedView({
                  view: 'custom',
                  viewData: item.selection,
                }),
              });
            }}
            rangeColors={['#FF5403']}
            showDateDisplay={false}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={state}
            direction="horizontal"
            preventSnapRefocus={true}
            calendarFocus="backwards"
            staticRanges={[]}
            inputRanges={[]}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomDatePicker;
